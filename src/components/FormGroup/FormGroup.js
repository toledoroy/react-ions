import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import Immutable, { List, Map } from 'immutable'
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
    schema: PropTypes.object,
    /**
     * A callback function to be called when a form value changes.
     */
    changeCallback: PropTypes.func,
    /**
     * A callback function to be called when the form is submitted.
     */
    submitCallback: PropTypes.func,
    /**
     * Optional CSS class(es) to be used for local styles (string or array of strings)
     */
    optClass: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    /**
     * Option to turn off form wrapper (for nested components)
     */
    nested: PropTypes.bool,
    /**
     * Option to turn off debounce when something in the form group changes
     */
    debounceTime: PropTypes.number
  }

  static defaultProps = {
    debounceTime: 0
  }

  state = {
    fieldErrors: Map()
  }

  _formValidation = List()

  componentWillReceiveProps = (nextProps) => {
    const nextPropsSchema = Immutable.fromJS(nextProps.schema)
    const thisPropsSchema = Immutable.fromJS(this.props.schema)

    if(!Immutable.is(nextPropsSchema, thisPropsSchema)) {
      this.setState({
        fields: Immutable.fromJS(nextProps.schema)
      })
    }
  }

  componentWillMount = () => {
    this.setState({
      fields: Immutable.fromJS(this.props.schema)
    })
  }

  _handleValidation = () => {
    // loop through this.state.fields
    // get validation for each one
    // construct the return object

    // Loop through validated fields
    const errors = this._formValidation.reduce(response, fieldValidation => {

      // Get the currently set value
      const fieldValue = this.state.fields.get(fieldValidation.name)

      // Get the first error where not valid (false if valid)
      const fieldError = fieldValidation.validators.reduceRight(valid, v => v.validator(fieldValue) ? v.errorMessage : false, false)

      // Do nothing if valid
      if(!fieldError) return

      // Otherwise set the error message
      return response.set(fieldValidation.name, fieldError)
    }, Map())

    if(errors.size === 0) return Map({ isValid: false })

    return Map({
      isValid: true,
      errors
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const validationResponse = this._handleValidation()

    if (!validationResponse.get('isValid')) {
      this.setState({
        fieldErrors: validationResponse.get('errors')
      })
    }

    if (validationResponse.get('isValid') && typeof this.props.submitCallback === 'function') {
      this.props.submitCallback(event, this.state.fields.toJS())
    }
  }

  handleChange = (event) => {
    let val = event.target.value
    let option = event.target.option

    // Handle checkbox values
    if (event.target.type === 'checkbox') {
      val = event.target.checked
    }

    this.setState(prevState => {
      let fields = prevState.fields.setIn([event.target.name, 'value'], val)

      if (option) {
        fields = fields.setIn([event.target.name, 'option'], option)
      }
      return { fields }
    }, () => {
      if (this.props.changeCallback) {
        this.props.changeCallback(this.state.fields.toJS())
      }
    })
  }

  getElements = (children) => {
    this._formValidation = List()
    return React.Children.map(children, child => {
      if (!child) return child

      let childProps = {}
      if (child.props) {
        const name = child.props.name

        const value = this.state.fields.getIn([name, 'value'])
        const valueIsImmutable = Immutable.Iterable.isIterable(value)
        const valueProp = valueIsImmutable ? value.toJS() : value

        if(child.props.validation) {
          this._formValidation.push(Map({
            name,
            validators: child.props.validation,
          }))
        }

        if (this.state.fields.has(name) && React.isValidElement(child)) {
          childProps = {
            changeCallback: this.props.debounceTime ? this.debounce : this.handleChange,
            value: valueProp,
            errorMessage: this.state.fieldErrors.get('name')
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
    }
    else {
      const fieldsetClass = optclass(style, 'fieldset', this.props.optClass)
      formWrapper = <fieldset className={fieldsetClass}>
                      {elements}
                    </fieldset>
    }
    return formWrapper
  }

  render = () => {
    return (
      this.renderForm()
    )
  }
}

export default FormGroup
