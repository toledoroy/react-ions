import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false,
    labelPosition: 'right'
  }

  state = {
    value: this.props.value
  }

  static propTypes = {
    /**
     * Whether the checkbox is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value of the input. Sets whether the component is checked or not.
     */
    value: React.PropTypes.bool,
    /**
     * Text displayed with the checkbox.
     */
    label: React.PropTypes.string,
    /**
     * Whether the label should appear on the right or left.
     */
    labelPosition: React.PropTypes.string,
    /**
     * Optional styles to add to the checkbox.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the checkbox changes.
     */
    changeCallback: React.PropTypes.func
  }

  handleChange = (event) => {
    event.persist()
    this.setState({ value: event.target.checked }, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(event)
      }
    })
  }

  componentWillMount = () => {
    if (this.props.value) {
      this.setState({ value: this.props.value })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  render() {
    const {
      label,
      labelPosition,
      optClass,
      changeCallback,
      ...other
    } = this.props

    const cx = classNames.bind(style)
    const disabledClass = this.props.disabled ? style['checkbox-disabled'] : ''
    const checkboxClass = cx(style['checkbox-component'], optClass, disabledClass)

    return (
      <div className={checkboxClass}>
        <input type="checkbox"
          checked={this.state.value}
          onChange={this.handleChange}
          {...other}>
        </input>
        <div>
          { label && labelPosition === 'left' ? <label className={style['label-left']}>{label}</label> : null }
          <div className={style['checkbox-input']}>
            <Icon name='icon-check-1-1' fill='#3C97D3' />
          </div>
          { label && labelPosition === 'right' ? <label className={style['label-right']}>{label}</label> : null }
        </div>
      </div>
    )
  }
}

export default Checkbox
