import React from 'react'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import classNames from 'classnames/bind'

const style = prefix(rawStyle)

class Toggle extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false,
    value: false
  }

  state = {
    value: this.props.value
  }

  static propTypes = {
    /**
     * Value of the input.
     */
    value: React.PropTypes.bool,
    /**
     * Text displayed with the toggle.
     */
    label: React.PropTypes.string,
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

    this.setState({ value: !this.state.value }, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: 'toggle',
            value: this.state.value
          }
        });
      }
    });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  render() {
    const cx = classNames.bind(style);
    const onClass = this.state.value ? style.on : ''
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    const toggleWrapper = cx(style['toggle-wrapper'])
    const toggleClass = cx(style['toggle-component'], disabledClass, this.props.optClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        { this.props.label ? <label className={style['label-left']}>{this.props.label}</label> : null }
        <div className={toggleWrapper}>
          <div className={outerClasses} />
          <div className={innerClasses} />
        </div>
      </div>
    )
  }
}

export default Toggle
