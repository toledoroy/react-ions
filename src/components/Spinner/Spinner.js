import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Spinner extends React.Component {
  constructor(props) {
    super(props)

    this.timeout = setTimeout(() => {
      this.setState({ loading: props.loading })
    }, props.delay)
  }

  state = {
    loading: false
  }

  static propTypes = {
    /**
     * Delay before showing spinner (in milliseconds)
     */
    delay: React.PropTypes.number,
    /**
     * Whether the spinner is displayed
     */
    loading: React.PropTypes.bool,
    /**
     * CSS positioning options for the loader. By default, the spinner will be positioned
     * in the center of any element with relative positioning.
     */
    position: React.PropTypes.oneOf(['fixed', 'inline']),
    /**
     * The type of loader you want to display.
     */
    type: React.PropTypes.oneOf(['spinner-dots', 'spinner-bounce']).isRequired,
    /**
     * The hex code of the loader color.
     */
    color: React.PropTypes.string,
    /**
     * Optional styles to add to the spinner.
     */
    optClass: React.PropTypes.string
  }

  componentWillMount = () => {
    this.getLoadingState(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.getLoadingState(nextProps)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextState.loading !== this.state.loading
    )
  }

  getLoadingState = (props) => {
    if (props.loading && props.delay) {
      this.timeout
    } else {
      clearTimeout(this.timeout)
      this.setState({ loading: props.loading })
    }
  }

  getStyle = () => {
    return this.props.color ? { backgroundColor: this.props.color } : null
  }

  innerHtml = () => {
    if (this.props.type === 'spinner-dots') {
      return <span>
               <span className={style.dot1} style={this.getStyle()}></span>
               <span className={style.dot2} style={this.getStyle()}></span>
             </span>
    }
    return <span>
             <span className={style.bounce1} style={this.getStyle()}></span>
             <span className={style.bounce2} style={this.getStyle()}></span>
             <span className={style.bounce3} style={this.getStyle()}></span>
           </span>
  }

  render() {
    const cx = classNames.bind(style)
    const loadingClass = this.state.loading ? style['loading'] : null
    const isHiddenClass = !this.state.loading ? style['is-hidden'] : null
    const spinnerPosition = this.props.position ? style[this.props.position] : style['absolute']
    const spinnerWrap = cx(style['spinner-wrap'], loadingClass, spinnerPosition, this.props.optClass, isHiddenClass)
    const spinnerClass = cx(style[this.props.type])

    return (
      <span className={spinnerWrap}>
        <span className={spinnerClass}>
          {this.innerHtml()}
        </span>
      </span>
    )
  }
}

export default Spinner
