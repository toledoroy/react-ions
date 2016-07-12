import React from 'react'
import debounce from 'lodash/debounce'
import style from './style.scss'
import optclass from '../internal/OptClass'

class FormGroup extends React.Component {
  constructor(props) {
    super(props)

    this.debounce = debounce(this.handleChange, this.props.debounceTime)
  }

  static propTypes = {
    /**
     * A configuration object of name/value pairs
     * that correspond to the form fields names.
     */
    schema: React.PropTypes.object,
    /**
     * A callback function to be called when a form value changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * A callback function to be called when the form is submitted.
     */
    submitCallback: React.PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.string
    ]),
    /**
     * Option to turn off form wrapper (for nested components)
     */
    nested: React.PropTypes.bool,
    /**
     * Option to turn off debounce when something in the form group changes
     */
    debounceTime: React.PropTypes.number
  }

  static defaultProps = {
    debounceTime: 0
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      fields: nextProps.schema
    })
  }

  componentWillMount = () => {
    this.setInitialState()
  }

  setInitialState = () => {
    let fields = {}
    let value = null
    let schema = this.props.schema

    for (value in schema) {
      fields[value] = schema[value]
    }

    this.setState({fields: fields})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (typeof this.props.submitCallback === 'function') {
      this.props.submitCallback(event, this.state.fields)
    }
  }

  handleChange = (event) => {
    let val

    if (event.target.type === 'checkbox') {
      val = (event.target.value === 'false') ? false : true
    } else {
      val = event.target.value
    }

    var newField = Object.assign({}, this.state.fields[event.target.name], {value: val})
    var previousState = Object.assign({}, this.state)
    var newState = previousState.fields[event.target.name] = newField

    if (typeof this.props.changeCallback === 'function') {
      this.setState(newState, () => {
        this.props.changeCallback(this.state.fields)
      })
    }
  }

  getElements(children) {
    return React.Children.map(children, child => {
      let childProps = {}
      if (child.props) {
        const name = child.props.name
        const fields = this.state.fields

        if (name in fields) {
          if (React.isValidElement(child)) {
            childProps = {
              changeCallback: this.debounce,
              value: fields[name].value
            }
          }
        }

        childProps.children = this.getElements(child.props.children)
        return React.cloneElement(child, childProps)
      }
      return child
    })
  }

  renderForm = () => {
    const elements = this.getElements(this.props.children)
    const formGroupClass = optclass(style, 'form-group', this.props.optClass)
    let formWrapper

    if (!this.props.nested) {
      formWrapper = <form className={formGroupClass} onSubmit={this.handleSubmit}>
                      <fieldset className={style.fieldset}>
                        {elements}
                      </fieldset>
                    </form>
    } else {
      const fieldsetClass = optclass(style, 'fieldset', this.props.optClass)
      formWrapper = <fieldset className={fieldsetClass}>
                      {elements}
                    </fieldset>
    }
    return formWrapper
  }

  render() {
    return (
      this.renderForm()
    )
  }
}

export default FormGroup
