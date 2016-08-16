import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

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
    size: React.PropTypes.string
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
    if (this.state.loaded === false) {
      this.setState({
        loaded: true
      })
    }
  }

  loadAvatar = () => {
    return <img src={this.props.src} onLoad={this.handleLoad} alt={this.props.alt} height={this.props.size} />
  }

  render() {
    const cx = classNames.bind(style)
    const avatarClasses = cx(style['avatar-wrapper'], (this.state.loaded ? 'loaded' : null))

    return (
      <div className={avatarClasses} style={this.props.size ? this.inlineStyle() : null}>
        {this.loadAvatar()}
      </div>
    )
  }
}

export default Avatar
