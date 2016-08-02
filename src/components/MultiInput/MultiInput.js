import React from 'react'
import optclass from '../internal/OptClass'
import Input from 'react-conventions/lib/Input/Input'
import TagList from '../internal/TagList'
import style from './style.scss'

class MultiInput extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * An array of objects which will be used as the options for the MultiInput component.
     */
    options: React.PropTypes.array,
    /**
     * The values of the options to be selected.
     */
    value: React.PropTypes.array,
    /**
     * Which field in the option object will be used as the value of the MultiInput component.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the MultiInput component.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the MultiInput component is disabled.
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

  componentWillMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
  }

  onRemove = (index) => {
    const values = this.state.value.slice()
    values.splice(index, 1)
    // this.setState({selected: this.getSelectedOptions(values), value: values}, () => {
    //   if (this.props.changeCallback) {
    //     this.props.changeCallback({
    //       target: {
    //         name: this.props.name,
    //         value: this.state.value,
    //         options: this.state.selected
    //       }
    //     })
    //   }
    // })
  }

  handleKeyPress = (event) => {
    if (event.charCode !== 13) {
      return
    } else {
      let values = this.state.value
      values.push(event.target.value)

      this.setState({value: values}, () => {
        if (this.props.changeCallback) {
          this.props.changeCallback({
            target: {
              name: this.props.name,
              value: this.state.value,
              options: this.state.selected
            }
          })
        }
      })
    }
  }

  render() {
    const multiInputClasses = optclass(style, 'multi-input', this.props.optClass)

    return (
      <div className={multiInputClasses}>
        <Input placeholder='Type something and hit enter' keypressCallback={this.handleKeyPress} />
        <TagList tags={this.state.value} displayProp={this.props.displayProp} onRemove={this.onRemove} />
      </div>
    )
  }
}

export default MultiInput
