import React from 'react'
import debounce from 'lodash/debounce'
import Immutable from 'immutable'
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
    var nextPropsSchema = Immutable.fromJS(nextProps.schema)
    var thisPropsSchema = Immutable.fromJS(this.props.schema)

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

  handleSubmit = (event) => {
    event.preventDefault()
    if (typeof this.props.submitCallback === 'function') {
      this.props.submitCallback(event, this.state.fields.toJS())
    }
  }

  handleChange = (event) => {
    if (!this.props.changeCallback) return

    let val = event.target.value

    // Handle checkbox values
    if (event.target.type === 'checkbox') {
      val = event.target.checked
    }

    this.setState(prevState => ({
      fields: prevState.fields.setIn([event.target.name, 'value'], val)
    }), () => {
      this.props.changeCallback(this.state.fields.toJS())
    })
  }

  getElements(children) {
    return React.Children.map(children, child => {
      let childProps = {}
      if (child.props) {
        const name = child.props.name
        if (this.state.fields.has(name) && React.isValidElement(child)) {
          childProps = {
            changeCallback: this.props.debounceTime ? this.debounce : this.handleChange,
            value: this.state.fields.getIn([name, 'value'])
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
