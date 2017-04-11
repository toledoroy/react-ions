import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Avatar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    // If image src was passed in, it is not yet loaded
    // Else, if letters were passed in, set loaded to true
    loaded: this.props.src ? false : true
  }

  static propTypes = {
    /**
     * Optional source of the image to load.
     */
    src: React.PropTypes.string,
    /**
     * Optional letters to display in lieu of an image.
     */
    letters: React.PropTypes.string,
    /**
     * Optional background for the letters.
     */
    letterBackgroundColor: React.PropTypes.string,
    /**
     * Optional text color for the letters.
     */
    letterTextColor: React.PropTypes.string,
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
      this.setState({ loaded: false })
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextProps.src !== this.props.src ||
      nextProps.size !== this.props.size ||
      nextState.loaded !== this.state.loaded
    )
  }

  getWrapperStyle = () => {
    return {
      backgroundColor: this.props.letterBackgroundColor,
      width: this.props.size + 'px',
      height: this.props.size + 'px'
    }
  }

  getTextStyle = () => {
    return {
      fontSize: (+this.props.size)*.6 + 'px',
      color: this.props.letterTextColor
    }
  }

  handleLoad = () => {
    this.setState({ loaded: true })
  }

  loadAvatar = () => {
    if (this.props.src) {
      return <img src={this.props.src} onLoad={this.handleLoad} alt={this.props.alt} height={this.props.size} />
    }
    else if (this.props.letters) {
      return (
        <div style={this.getWrapperStyle()}>
          <span style={this.getTextStyle()}>{this.props.letters.toUpperCase()}</span>
        </div>
      )
    }
  }

  render() {
    const cx = classNames.bind(style)
    const avatarClasses = cx(style['avatar-wrapper'], (this.state.loaded ? 'loaded' : null), this.props.optClass)

    return (
      <div className={avatarClasses} style={this.props.size ? this.getWrapperStyle() : null}>
        {this.loadAvatar()}
      </div>
    )
  }
}

export default Avatar
