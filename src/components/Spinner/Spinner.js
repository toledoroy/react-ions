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
    if (this.props.type === 'spinner-bounce') {
      return <span>
               <span className={style.bounce1} style={this.getStyle()}></span>
               <span className={style.bounce2} style={this.getStyle()}></span>
               <span className={style.bounce3} style={this.getStyle()}></span>
             </span>
    }
  }

  render() {
    const cx = classNames.bind(style)
    const loadingClass = this.state.loading ? style['loading'] : null
    const spinnerPosition = this.props.position ? style[this.props.position] : style['absolute']
    const spinnerWrap = cx(style['spinner-wrap'], loadingClass, spinnerPosition, this.props.optClass)
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
