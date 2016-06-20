import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Icon from '../Icon'
import map from 'lodash/map'

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
     * The value(s) of the option(s) to be selected.
     */
    value: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
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
    icon: React.PropTypes.string,
    /**
     * Whether the select field allows multiple items to be selected.
     */
    multi: React.PropTypes.bool
  }

  state = {
    isOpen: false,
    value: this.props.value || (this.props.multiple ? [] : '')
  }

  componentWillMount = () => {
    // Multiple select
    if (this.props.multi && this.state.value instanceof Array && this.state.value.length > 0 && this.containsValidValue(this.state.value, this.props.options)) {
      this.selectItems(this.state.value, this.props.options)
    }
    // Single select
    else if (this.state.value !== '' && this.getIndex(this.state.value, this.props.options) > -1) {
      this.selectItem(this.state.value, this.props.options)
    }
    // No value is passed in
    else {
      this.setState({selected: this.props.multi ? [] : '', value: this.props.multi ? [] : ''})
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.toggleSelectField)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      // Multiple select
      if (nextProps.multi && nextProps.value instanceof Array && (this.containsValidValue(nextProps.value, nextProps.options) || nextProps.value.length === 0)) {
        this.selectItems(nextProps.value, nextProps.options)
      }
      // Single select
      else if (nextProps.value && nextProps.value && (this.getIndex(nextProps.value, nextProps.options) > -1 || nextProps.value === '')) {
        this.selectItem(nextProps.value, nextProps.options)
      }
      // No value is passed in
      else {
        this.setState({selected: nextProps.multi ? [] : '', value: nextProps.multi ? [] : ''})
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

  handleSelect = (option) => {
    if (this.props.multi) {
      let selected = this.state.selected
      selected.push(option)

      this.selectMultiple(selected, true)
    }
    else {
      this.selectOption(option, true)
    }
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

  selectMultiple = (options, triggerCallback) => {
    let values = map(options, this.props.valueProp)

    this.setState({selected: options, value: values}, function() {
      if (triggerCallback && typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: values,
            option: options
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

  selectItems = (values, options) => {
    let selectedOptions = []

    for (let i = 0; i < values.length; i++) {
      let index = this.getIndex(values[i], options)
      if (index >= 0) {
        selectedOptions.push(options[index])
      }
    }

    this.selectMultiple(selectedOptions, false)
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

  containsValidValue = (values, options) => {
    let isValid = false

    for (let i = 0; i < values.length; i++) {
      if (this.getIndex(values[i], options) > -1) {
        isValid = true
      }
    }

    return isValid
  }

  getDisplayText = () => {
    if (this.props.multi) {
      if (typeof this.props.placeholder !== 'undefined') {
        return this.props.placeholder
      }
      else {
        return 'Please select one or more'
      }
    }
    else {
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
  }

  getDisplayIcon = () => {
    if (this.state.selected && this.state.selected.icon) {
      return <Icon name={this.state.selected.icon} fill={this.state.selected.iconColor ||  null} className={style.icon} height='16' width='16' />
    }
    else if (this.props.options[0].icon && !this.props.placeholder) {
      return <Icon name={this.props.options[0].icon} fill={this.props.options[0].iconColor ||  null} className={style.icon} height='16' width='16' />
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

    let options

    if (this.props.multi) {
      options = []
      this.props.options.map((option, index) => {
        if (selectedValues.indexOf(option[valueProp]) === -1) {
          options.push(<li key={index} onClick={this.handleSelect.bind(null, option)}>{option.icon ? <Icon name={option.icon} fill={option.iconColor ||  null} className={style.icon} height='16' width='16' /> : null}{option[this.props.displayProp]}</li>)
        }
      })

      if (options.length === 0) {
        options.push(<li key={0} className={style['not-clickable']}>Nothing to select</li>)
      }
    }
    else {
      options = this.props.options.map((option, index) =>
        <li key={index} onClick={this.handleSelect.bind(null, option)}>{option.icon ? <Icon name={option.icon} fill={option.iconColor ||  null} className={style.icon} height='16' width='16' /> : null}{option[this.props.displayProp]}</li>
      )
    }

    let value = ''
    if (this.state.selected) {
      if (this.props.multi) {
        value = map(this.state.selected, this.props.valueProp).join(',')
      }
      else {
        value = this.state.selected[this.props.valueProp]
      }
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
