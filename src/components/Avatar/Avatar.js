import React from 'react'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import classNames from 'classnames/bind'

const style = prefix(rawStyle)

class Avatar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loaded: false
  }

  static propTypes = {
    /**
     * The source of the image to load.
     */
    src: React.PropTypes.string.isRequired,
    /**
     * Optional alt text for the image
     */
    alt: React.PropTypes.string,
    /**
     * Optional size to constrain the image (only supports square images)
     */
    size: React.PropTypes.string,
    /**
     * Optional CSS class to pass to the badge.
     */
    optClass: React.PropTypes.string
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.src !== this.props.src) {
      this.setState({
        loaded: false
      })
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.src !== this.props.src ||
      nextProps.size !== this.props.size ||
      nextState.loaded !== this.state.loaded
    )
  }

  inlineStyle = () => {
    return {
      width: this.props.size + 'px',
      height: this.props.size + 'px'
    }
  }

  handleLoad = () => {
    this.setState({
      loaded: true
    })
  }

  loadAvatar = () => {
    return <img src={this.props.src} onLoad={this.handleLoad} alt={this.props.alt} height={this.props.size} />
  }

  render() {
    const cx = classNames.bind(style)
    const avatarClasses = cx(style['avatar-wrapper'], (this.state.loaded ? 'loaded' : null), this.props.optClass)

    return (
      <div className={avatarClasses} style={this.props.size ? this.inlineStyle() : null}>
        {this.loadAvatar()}
      </div>
    )
  }
}

export default Avatar
