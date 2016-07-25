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
     * A callback function to be called when the spinner state changes.
     */
    callback: React.PropTypes.func
  }

  render() {
    const cx = classNames.bind(style)
    const loadingClass = this.state.loading ? style['loading'] : null
    const spinnerWrap = cx(style['spinner-wrap'], loadingClass)
    const spinnerClass = cx(style['spinner-component'], this.props.optClass)

    return (
      <div className={spinnerWrap}>
        <div className={spinnerClass}>
          <div className={style.dot1}></div>
          <div className={style.dot2}></div>
        </div>
      </div>
    )
  }
}

export default Spinner
