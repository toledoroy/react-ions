import React from 'react'
import optclass from '../internal/OptClass'
import Icon from '../Icon'
import Input from '../Input'
import TagList from '../internal/TagList'
import style from './style.scss'

class InputList extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * The values of the options to be selected.
     */
    value: React.PropTypes.array,
    /**
     * Which field in the option object will be used as the value of the InputList component.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the InputList component.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the InputList component is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ])
  }

  state = {
    value: this.props.value || []
  }

  generateOptionsList = (o) => {
    let options = o.map((v) => {
      return {
        display: v,
        value: v
      }
    })
    return options
  }

  componentWillMount = () => {
    if (this.state.value instanceof Array && this.state.value.length > 0) {
      this.setState({
        value: this.state.value,
        options: this.generateOptionsList(this.props.value)
      })
    }
    else {
      this.setState({value: [], options: []})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.state.value) {
      if (nextProps.value instanceof Array && nextProps.value.length === 0) {
        this.setState({
          value: nextProps.value,
          options: this.generateOptionsList(nextProps.value)
        })
      }
      else {
        this.setState({value: [], options: []})
      }
    }
  }

  onRemove = (index) => {
    const arr = this.state.value
    arr.splice(index, 1)
    this.setState({value: arr, options: this.generateOptionsList(arr)}, () => {
      if (this.props.changeCallback) {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: this.state.value
          }
        })
      }
    })
  }

  clearInput = () => {
    this.setState({currentValue: ''})
  }

  handleChange = (event) => {
    if (event.charCode !== 13 && event.type !== 'click' || event.target.value === '') {
      this.setState({
        currentValue: event.target.value
      })
    } else {
      let value = this.state.value
      value.push(event.target.value)

      let options = this.generateOptionsList(value)

      this.setState({value: value, options: options}, () => {
        if (this.props.changeCallback) {
          this.props.changeCallback({
            target: {
              name: this.props.name,
              value: this.state.value
            }
          })
          this.clearInput()
        }
      })
    }
  }

  handleClick = () => {
    this.handleChange({
      type: 'click',
      target: {
        value: this.state.currentValue
      }
    })
  }

  render() {
    const inputListClasses = optclass(style, 'input-list-wrapper', this.props.optClass)

    return (
      <div className={inputListClasses}>
        <Input placeholder='Type something and hit enter' value={this.state.currentValue} onKeyUp={this.handleChange} onKeyPress={this.handleChange} />
        <Icon name='icon-add-1-1' className={style['input-list-add-item']} width='14' height='14' fill='#9198A0' onClick={this.handleClick} />
        <TagList tags={this.state.options} displayProp={this.props.displayProp} onRemove={this.onRemove} />
      </div>
    )
  }
}

export default InputList
