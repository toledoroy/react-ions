import React from 'react'
import Immutable from 'immutable'
import FormGroup from 'react-ions/lib/components/FormGroup'
import ValidatedField from 'react-ions/lib/components/FormGroup/ValidatedField'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style'
import style from './style.scss'

const validate = {
  isNotEmpty: str => {
    return !!str || str === 0
  },
  isDefined: val => {
    return val !== undefined
  },
  isValidEmail: email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return !!email && re.test(email.trim())
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

  handleChange = (fields) => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    alert(JSON.stringify(fields, 2, null))
  }

  handleErrors = (errors) => {
    console.log(errors.toJS())
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        errorCallback={this.handleErrors}
        schema={schema}
      >
        <ValidatedInput
          name='email'
          label='Email'
          type='text'
          placeholder='sugerman@6am.com'
          validation={[
            {
              validator: validate.isNotEmpty,
              message: 'The email field is required.'
            },
            {
              validator: validate.isValidEmail,
              message: 'Please enter a valid email address.'
            }
          ]}
          optClass={formStyle.field}
        />
        <ValidatedTextarea
          name='message'
          label='Message'
          type='text'
          validation={[
            {
              validator: validate.isNotEmpty,
              message: 'This textfield is required.'
            }
          ]}
          optClass={formStyle.field}
        />
        <Button type='submit'>Submit</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormValidation
