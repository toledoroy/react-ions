import React from 'react'
import optclass from '../internal/OptClass'
import ActivityFeedItem from './ActivityFeedItem'
import Infinite from 'react-infinite'
import Spinner from '../Spinner'
import style from './style.scss'
import throttle from 'lodash/throttle'

class ActivityFeed extends React.Component {
  constructor(props) {
    super(props)
    this.offsetThrottle = throttle(this.updateOffset, 200)
    this.scrollThrottle = throttle(this.scrollUpdate, 400)
  }

  static propTypes = {
    /**
     * The activity feed data.
     */
    data: React.PropTypes.array.isRequired,
    /**
     * Callback to fetch more activity feed items.
     * The callack should return a promise that resolves once the data has been fetched.
     * The promise should be rejected if there are no more items to load.
     * The callback should also update props.data with the additional items before resolving the promise.
     */
    onInfiniteLoad: React.PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings).
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    /**
     * Optional total count to prevent infinite scroll from requesting more items.
     */
    totalCount: React.PropTypes.number,
    /**
     * Whether to use the window or the wrapper element for the scroll container,
     */
    useWindowAsScrollContainer: React.PropTypes.bool,
    /**
     * The container height (required if useWindowAsScrollContainer is set to false),
     */
    containerHeight: React.PropTypes.number,
    /**
     * Force "compact" view on all screen sizes.
     */
    compactView: React.PropTypes.bool
  }

  static defaultProps = {
    useWindowAsScrollContainer: true,
    containerHeight: 0
  }

  handleSetHeight = (i, height) => {
    if(this.state.heights[i] !== height) {
      let heights = this.state.heights
      heights[i] = height
      this.setState({ heights })
    }
  }

  getHeight = (i) => {
    return this.state.heights[i]+'-px'
  }

  buildElements = (start, data) => {
    let items = []
    let heights = []
    for (var i = start; i < data.length; i++) {
      const item = data[i]
      const stateIndex = start+i
      heights.push(this.state && this.state.heights[stateIndex] || 200)
      items.push(
        <ActivityFeedItem
          key={stateIndex}
          name={item.name}
          badge={item.badge}
          profileUrl={item.profileUrl}
          profileUrlTarget={item.profileUrlTarget}
          title={item.title}
          actions={item.actions}
          text={item.text}
          time={item.timestamp}
          onSetHeight={this.handleSetHeight.bind(this, i)}
        />)
    }

    return { items, heights }
  }

  state = {
    data: this.props.data,
    heights: [],
    items: [],
    fetchMoreEnabled: true,
    offset: window.innerHeight
  }

  componentWillMount = () => {
    this.setState(this.buildElements(0, this.props.data))
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.offsetThrottle)
    window.addEventListener('scroll', this.scrollThrottle)
    this.updateOffset()
  }

  componentWillReceiveProps = (nextProps) => {
    const {
      items,
      heights
    } = this.buildElements(0, nextProps.data)

    this.setState({
      data: nextProps.data,
      items,
      heights
    })
  }

  componentWillUnmount = () => {
    this.offsetThrottle.cancel()
    this.scrollThrottle.cancel()
    window.removeEventListener('resize', this.offsetThrottle)
    window.removeEventListener('scroll', this.scrollThrottle)
  }

  handleInfiniteLoad = () => {
    // If we've already fetched as many items as there are available
    // or no function has been provided to fetch more
    // then there is no need to fetch.
    if (this.props.totalCount && this.state.items.length >= this.props.totalCount || typeof this.props.onInfiniteLoad !== 'function') {
      this.setState({ isInfiniteLoading: false })
      return
    }

    // If we are already loading more items do not keep trying
    if(this.state.isInfiniteLoading) {
      return
    }

    // Show loader while fetching
    this.setState({ isInfiniteLoading: true })
    return this.props.onInfiniteLoad()
    .then(() => {
      this.setState({ isInfiniteLoading: false })
    })
    .catch(() => {
      this.setState({ isInfiniteLoading: false })
    })
  }

  updateOffset = () => {
    const rect = this._table.getBoundingClientRect()
    const calculatedOffset = rect.top + document.body.scrollTop
    const newOffset = calculatedOffset >= window.innerHeight ? calculatedOffset : window.innerHeight

    if (this.state.offset !== newOffset) {
      this.setState({offset: newOffset})
    }
  }

  scrollUpdate = () => {
    // If the infinite list if about to enter the screen
    // we re-render it. This is in case the list offset
    // is changed after the component is loaded.
    const listTopSpace = this._table.getBoundingClientRect().top

    // Once the infinite list is past the top of the screen,
    // we stop updating the offset
    if (listTopSpace >= 0) {
      this.updateOffset()
    }
  }

  render() {
    const compactViewClass = this.props.compactView ? 'compact-view' : null
    const windowAsScrollContainerClass = !this.props.useWindowAsScrollContainer ? 'element-scrollable' : null
    const elementInfiniteLoad = (<div className={style['loader']}><Spinner loading={true} optClass={style['spinner']} type='spinner-bounce' color='#3C97D3' /></div>)

    let classArray = ['activity-feed', compactViewClass, windowAsScrollContainerClass]

    const feedClasses = optclass(style, classArray, this.props.optClass)

    return (
      <div className={feedClasses}>
        <ul ref={(ref) => this._table = ref}>
          <Infinite
            elementHeight={this.state.heights}
            useWindowAsScrollContainer={this.props.useWindowAsScrollContainer}
            containerHeight={this.props.containerHeight}
            infiniteLoadBeginEdgeOffset={1000}
            onInfiniteLoad={this.handleInfiniteLoad}
            loadingSpinnerDelegate={elementInfiniteLoad}
            preloadAdditionalHeight={this.state.offset}
            isInfiniteLoading={this.state.isInfiniteLoading}>
              {this.state.items}
          </Infinite>
        </ul>
      </div>
    )
  }
}

export default ActivityFeed
