import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Icon from '../Icon'

class SelectField extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * A string to display as the placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * An array of objects which will be used as the options for the select field.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * The value of the option to be selected.
     */
    value: React.PropTypes.string,
    /**
     * Which field in the option object will be used as the value of the select field.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the select field.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the select field is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Optional styles to add to the select field.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Icon to be displayed on the left
     */
    icon: React.PropTypes.string
  }

  state = {
    isOpen: false,
    value: this.props.value || ''
  }

  componentWillMount = () => {
    // Select item
    if (this.state.value !== '' && this.getIndex(this.state.value, this.props.options) > -1) {
      this.selectItem(this.state.value, this.props.options)
    }
    // No value is passed in
    else {
      this.setState({selected: '', value: ''})
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.toggleSelectField)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      // Select item
      if (nextProps.value && nextProps.value && (this.getIndex(nextProps.value, nextProps.options) > -1 || nextProps.value === '')) {
        this.selectItem(nextProps.value, nextProps.options)
      }
      // No value is passed in
      else {
        this.setState({selected: '', value: ''})
      }
    }
  }

  toggleSelectField = () => {
    this.setState({isOpen: !this.state.isOpen}, function() {
      if (this.state.isOpen) {
        document.addEventListener('click', this.toggleSelectField)
      }
      else {
        document.removeEventListener('click', this.toggleSelectField)
      }
    })
  }

  selectOption = (option, triggerCallback) => {
    this.setState({selected: option, value: option[this.props.valueProp]}, function() {
      if (triggerCallback && typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: option[this.props.valueProp],
            option: option
          }
        })
      }
    })
  }

  selectItem = (value, options) => {
    let index = this.getIndex(value, options)
    if (index >= 0) {
      this.selectOption(options[index], false)
    }
  }

  getIndex = (value, options) => {
    let optionIndex = -1
    options.map((option, index) => {
      if (option[this.props.valueProp] === value) {
        optionIndex = index
      }
    })

    return optionIndex
  }

  getDisplayText = () => {
    if (this.state.selected !== '') {
      return this.state.selected[this.props.displayProp]
    }
    else if (typeof this.props.placeholder !== 'undefined') {
      return this.props.placeholder
    }
    else {
      return 'Please select an option'
    }
  }

  getDisplayIcon = () => {
    if (this.state.selected && this.state.selected.icon) {
      return <Icon name={this.state.selected.icon} fill={this.state.selected.iconColor ||  null} className={style.icon} height='16' width='16' />
    }
    else if (this.props.icon) {
      return <Icon name={this.props.icon} className={style.icon} height='16' width='16' />
    }
    else {
      return null
    }
  }

  render() {
    const cx = classNames.bind(style)
    const disabledClass = this.props.disabled ? style['selectfield-disabled'] : ''
    const activeClass = this.state.isOpen ? style['active'] : ''
    const hasIconClass = !!this.getDisplayIcon() ? style['has-icon'] : ''
    const selectFieldClass = cx(style['selectfield-component'], activeClass, disabledClass, hasIconClass, this.props.optClass)
    const valueProp = this.props.valueProp
    const selectedValues = this.state.value

    let options = this.props.options.map((option, index) =>
      <li key={index} onClick={this.selectOption.bind(null, option, true)}>{option.icon ? <Icon name={option.icon} fill={option.iconColor ||  null} className={style.icon} height='16' width='16' /> : null}{option[this.props.displayProp]}</li>
    )

    if (options.length === 0) {
      options.push(<li key={0} className={style['not-clickable']}>Nothing to select</li>)
    }

    let value = ''
    if (this.state.selected) {
      value = this.state.selected[this.props.valueProp]
    }

    return (
      <div className={selectFieldClass}>
        <input type='hidden' name='selectfield-value' value={value} />
        <div className={style['selectfield-value']} onClick={this.toggleSelectField}>
          {this.getDisplayIcon()}
          <span className={style['display-text']}>{this.getDisplayText()}</span>
          <Icon name='icon-caret' width='10' height='10' />
        </div>
        <ul>
          {options}
        </ul>
      </div>
    )
  }
}

export default SelectField
