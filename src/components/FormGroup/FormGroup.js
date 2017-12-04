import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { validate } from 'react-ions/utilities/validation'
import { formSchemaToKeyVal } from 'react-ions/utilities/form'
import { is, Iterable, fromJS, List, Map } from 'immutable'
import style from './style.scss'
import optclass from '../internal/OptClass'

class FormGroup extends React.Component {
  constructor(props) {
    super(props)

    this.debounce = debounce(this.handleChange, this.props.debounceTime)
    this._formValidation = null
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
    debounceTime: 0,
    fieldErrors: Map()
  }

  state = {
    fieldErrors: {}
  }

  componentWillReceiveProps = (nextProps) => {
    const nextPropsSchema = fromJS(nextProps.schema)
    const thisPropsSchema = fromJS(this.props.schema)

    if(!is(nextPropsSchema, thisPropsSchema)) {
      this.setState({
        fields: fromJS(nextProps.schema)
      })
    }
  }

  componentWillMount = () => {
    this.setState({
      fields: fromJS(this.props.schema)
    })
  }

  // Errors can be passed in via props if external validation is used or
  // errors can be captured from state if internal validation is used
  _mapFieldErrors = () => {
    return Map(this.props.fieldErrors).merge(this.state.fieldErrors)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const fieldErrors = validate(this._formValidation, formSchemaToKeyVal(this.state.fields))

    // Required to send error prop to ValidatedField component
    this.setState({ fieldErrors })

    if (fieldErrors && fieldErrors.size && typeof this.props.errorCallback === 'function') {
      return this.props.errorCallback(fieldErrors)
    }

    if (typeof this.props.submitCallback === 'function') {
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
    // Resetting validation each time this is run
    let validationMap = Map()

    return React.Children.map(children, child => {
      if (!child) return child

      let childProps = {}
      if (child.props) {
        const name = child.props.name

        const error = this._mapFieldErrors().get(name)
        const value = this.state.fields.getIn([name, 'value'])
        const valueIsImmutable = Iterable.isIterable(value)
        const valueProp = valueIsImmutable ? value.toJS() : value

        if (child.props.validation) {
          validationMap = validationMap.set(name, Map({
            validators: fromJS(child.props.validation),
          }))
        }

        if (this.state.fields.has(name) && React.isValidElement(child)) {
          childProps = {
            changeCallback: this.props.debounceTime ? this.debounce : this.handleChange,
            value: valueProp,
            error
          }
        }

        childProps.children = this.getElements(child.props.children)

        this._formValidation = validationMap
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
