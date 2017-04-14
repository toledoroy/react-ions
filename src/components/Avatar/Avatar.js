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
      backgroundColor: this.props.letterBackgroundColor || this.getBackgroundColor(),
      width: this.props.size + 'px',
      height: this.props.size + 'px'
    }
  }

  getBackgroundColor = () => {
    // If no letters passed in, use the default color in the stylesheet
    if (!this.props.letters) return

    switch (this.props.letters.charAt(0)) {
      case 'a':
      case 'k':
      case 'u':
        return '#F93943'
      case 'b':
      case 'l':
      case 'v':
        return '#796DE8'
      case 'c':
      case 'm':
      case 'w':
        return '#6E3FAF'
      case 'd':
      case 'n':
      case 'x':
        return '#28D397'
      case 'e':
      case 'o':
      case 'y':
        return '#ED7C5A'
      case 'f':
      case 'p':
      case 'z':
        return '#F93983'
      case 'g':
      case 'q':
        return '#F9B339'
      case 'h':
      case 'r':
        return '#6BE2F9'
      case 'i':
      case 's':
        return '#AAE667'
      case 'j':
      case 't':
        return '#ED7BE9'
    }
  }

  getTextStyle = () => {
    return {
      fontSize: (+this.props.size)*.6 + 'px'
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
          <span style={this.getTextStyle()}>{this.props.letters.length <= 2 ? this.props.letters : this.props.letters.substr(0, 2)}</span>
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
