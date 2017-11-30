import React from 'react'
import Immutable from 'immutable'
import { ValidatedField, FormGroup } from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style'
import style from './style.scss'
import { log } from 'util';

const validate = {
  empty: _str => {
    return !!_str
  },
  email: _email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !!_email && re.test(_email.trim())
  },
  urlWithProtocol: _url => {
    const re = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    return !!_url && re.test(_url.trim())
  }
}

const ValidatedInput = ValidatedField(Input)
const ValidatedTextarea = ValidatedField(Textarea)

const schema = {
  email: {
    value: ''
  },
  message: {
    value: ''
  }
}

class ExampleFormValidation extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    errors: {
      email: null,
      message: null
    }
  }

  handleChange = (fields) => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    alert(JSON.stringify(fields, 2, null))
  }

  handleErrors = (errors) => {
    this.setState({
      errors: {
        email: errors.get('email'),
        message: errors.get('message')
      }
    })
    console.log(errors.toJS())
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        errorCallback={this.handleErrors}
        debounceTime={250}
        schema={schema}
      >
        <ValidatedInput 
          name='email'
          label='Email'
          type='text'
          placeholder='sugerman@6am.com'
          validation={[
            {
              validator: validate.email,
              errorMessage: 'Please enter a valid email address.'
            }
          ]}
          error={this.state.errors.email}
          optClass={formStyle.field}
        />
        <ValidatedTextarea 
          name='message'
          label='Message'
          type='text'
          validation={[
            {
              validator: validate.empty,
              errorMessage: 'This textfield is required.'
            }
          ]}
          error={this.state.errors.message}
          optClass={formStyle.field}
        />
        <Button type='submit'>Submit</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormValidation
