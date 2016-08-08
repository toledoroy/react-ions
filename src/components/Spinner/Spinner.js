import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Spinner extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    loading: false
  }

  state = {
    loading: this.props.loading
  }

  static propTypes = {
    /**
     * Whether the spinner is displayed
     */
    loading: React.PropTypes.bool,
    /**
     * CSS positioning option for the loader. Default is 'absolute'
     */
    position: React.PropTypes.oneOf(['fixed']),
    /**
     * The type of loader you want to display.
     */
    type: React.PropTypes.oneOf(['spinner-dots', 'spinner-bounce']).isRequired,
    /**
     * The hex code of the loader color.
     */
    color: React.PropTypes.string,
    /**
     * Optional styles to add to the textarea.
     */
    optClass: React.PropTypes.string
  }

  getStyle = () => {
    return this.props.color ? { backgroundColor: this.props.color } : null
  }

  innerHtml = () => {
    if (this.props.type === 'spinner-dots') {
      return <div>
               <div className={style.dot1} style={this.getStyle()}></div>
               <div className={style.dot2} style={this.getStyle()}></div>
             </div>
    }
    if (this.props.type === 'spinner-bounce') {
      return <div>
               <div className={style.bounce1} style={this.getStyle()}></div>
               <div className={style.bounce2} style={this.getStyle()}></div>
               <div className={style.bounce3} style={this.getStyle()}></div>
             </div>
    }
  }

  render() {
    const cx = classNames.bind(style)
    const loadingClass = this.state.loading ? style['loading'] : null
    const spinnerWrap = cx(style['spinner-wrap'], loadingClass, style[this.props.position], this.props.optClass)
    const spinnerClass = cx(style[this.props.type], this.props.optClass)

    return (
      <div className={spinnerWrap}>
        <div className={spinnerClass}>
          {this.innerHtml()}
        </div>
      </div>
    )
  }
}

export default Spinner
