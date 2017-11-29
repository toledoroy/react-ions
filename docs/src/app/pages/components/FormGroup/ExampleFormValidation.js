import React from 'react'
import FormGroup from 'react-ions/lib/components/FormGroup'
import Input from 'react-ions/lib/components/Input'
import Textarea from 'react-ions/lib/components/Textarea'
import Button from 'react-ions/lib/components/Button'
import formStyle from 'react-ions/lib/components/FormGroup/style'
import style from './style.scss'

const emptyString = e => !!e

// ValidatedField HOC
  // validation: object
  //

const ValidatedInput = ValidatedField(Input)

const schema = {
  subject: {
    value: 'This is a subject',
    validation: [
      {
        validator: emptyString,
        errorMessage: 'This field is required'
      }
    ]
  },
  message: {
    value: 'This is a message',
    validation: [
      {
        validator: emptyString,
        errorMessage: 'This field is required'
      }
    ]
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

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        debounceTime={250}
        schema={schema}
      >

        <ValidatedInput name='subject' label='Subject' type='text' optClass={formStyle.field} />
        <Textarea name='message' label='Message' type='text' optClass={formStyle.field} />

        <Button type='submit'>Submit</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormValidation
