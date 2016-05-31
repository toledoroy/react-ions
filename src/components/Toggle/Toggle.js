import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    on: false,
    disabled: false
  }

  state = {
    on: this.props.on
  }

  static propTypes = {
    /**
     * Whether the toggle is on.
     */
    on: React.PropTypes.bool,
    /**
     * Whether the toggle is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Optional styles to add to the toggle.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the toggle changes.
     */
    changeCallback: React.PropTypes.func
  };

  handleChange = () => {
    if (this.props.disabled) {
      return
    }

    this.setState({on: !this.state.on})
  }

  componentWillMount = () => {

  }

  componentWillReceiveProps = (nextProps) => {

  }

  render() {
    const cx = classNames.bind(style);
    const onClass = this.state.on ? style.on : ''
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    var toggleClass = cx(style['toggle-component'], disabledClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        <div className={outerClasses} />
        <div className={innerClasses} />
      </div>
    )
  }
}

export default Toggle
