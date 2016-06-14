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
    if (typeof this.state.value !== 'undefined' && this.state.value !== '') {
      this.selectItem(this.state.value, this.props.options)
    }
    else {
      this.setState({selected: ''})
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.toggleSelectField)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value && nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value }, function() {
        this.selectItem(nextProps.value, nextProps.options)
      })
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
      return this.props.options[0][this.props.displayProp]
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

    const options = this.props.options.map((option, index) =>
      <li key={index} onClick={this.selectOption.bind(null, option, true)}>{option.icon ? <Icon name={option.icon} fill={option.iconColor ||  null} className={style.icon} height='16' width='16' /> : null}{option[this.props.displayProp]}</li>
    )

    return (
      <div className={selectFieldClass}>
        <input type='hidden' name='selectfield-value' value={this.state.selected && this.state.selected[this.props.valueProp]} />
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
