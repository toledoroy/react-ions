import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import Checkbox from 'react-conventions/lib/Checkbox'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import Radio from 'react-conventions/lib/Radio/Radio'
import SelectField from 'react-conventions/lib/SelectField'
import Button from 'react-conventions/lib/Button'
import Toggle from 'react-conventions/lib/Toggle'
import FileUpload from 'react-conventions/lib/FileUpload'
import style from 'react-conventions/lib/FormGroup/style'

let fields = {
  radio: [
    {
      value: 'option_1',
      label: 'Display your own custom message'
    }, {
      value: 'option_2',
      label: 'Display a refer a friend'
    }, {
      value: 'option_3',
      label: 'Show them another survey'
    }, {
      value: 'option_4',
      label: 'Redirect them'
    }
  ],
  select: [
    {value: '0', display: 'test 1'},
    {value: '1', display: 'test 2'},
    {value: '2', display: 'test 3'}
  ]
}

class ExampleFormGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    schema: {
      'subject': {
        'value': 'This is my subject'
      },
      'message': {
        'value': 'This is my message'
      },
      'radio': {
        'value': 'option_2'
      },
      'radioWithChildren': {
        'value': 'child_option_1'
      },
      'child_option_1': {
        'value': 'child_option_1'
      },
      'child_option_2': {
        'value': 'child_option_2'
      },
      'child_option_3': {
        'value': 'child_option_3'
      },
      'child_input_1': {
        'value': ''
      },
      'child_input_2': {
        'value': ''
      },
      'child_input_3': {
        'value': ''
      },
      'select': {
        'value': '1'
      },
      'email': {
        'value': true
      },
      'facebook': {
        'value': false
      },
      'twitter': {
        'value': true
      },
      'linkedin': {
        'value': false
      },
      'toggle': {
        'value': false
      },
      'logo': {
        'value': 'https://ambassador-api.s3.amazonaws.com/uploads/marketing/54/2016_06_02_18_40_39.png'
      }
    }
  }

  handleChange = (fields) => {
    this.setState({schema: fields})
  }

  handleSubmit = (event, fields) => {
    event.preventDefault()
    alert(JSON.stringify(fields, 2, null))
  }

  resetForm = () => {
    this.setState({
      schema: {
        subject: {
          value: ''
        },
        message: {
          value: ''
        },
        radio: {
          value: 'option_1'
        },
        radioWithChildren: {
          value: 'child_option_1'
        },
        child_option_1: {
          value: 'child_option_1'
        },
        child_option_2: {
          value: 'child_option_2'
        },
        child_option_3: {
          value: 'child_option_3'
        },
        child_input_1: {
          value: ''
        },
        child_input_2: {
          value: ''
        },
        child_input_3: {
          value: ''
        },
        select: {
          value: '0'
        },
        email: {
          value: false
        },
        facebook: {
          value: false
        },
        twitter: {
          value: false
        },
        linkedin: {
          value: false
        },
        toggle: {
          value: false
        },
        logo: {
          value: ''
        }
      }
    })
  }

  getRadioChildClass = (sibling) => {
    return sibling !== this.state.schema.radioWithChildren.value ? style['is-hidden'] : style['radio-child']
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        submitCallback={this.handleSubmit}
        schema={this.state.schema}>

        <Input name='subject' label='Subject line' type='text' optClass={style.field} />
        <Textarea name='message' label='Message' optClass={style.field} />

        <RadioGroup
          name='radio'
          label='What happens after a promoter submits a score?'
          options={fields.radio}
          optClass={style.field} />

        <RadioGroup name='radioWithChildren' label='Click a radio button to set a child value'>
          <Radio name='child_option_1' label='Option 1' />
          <Input name='child_input_1' optClass={this.getRadioChildClass('child_option_1')} />
          <Radio name='child_option_2' label='Option 2' />
          <Input name='child_input_2' optClass={this.getRadioChildClass('child_option_2')} />
          <Radio name='child_option_3' label='Option 3' />
          <Input name='child_input_3' optClass={this.getRadioChildClass('child_option_3')} />
        </RadioGroup>

        <SelectField
          label='Select something'
          name='select'
          options={fields.select}
          valueProp='value'
          displayProp='display'
          optClass={style.field} />

        <Toggle name='toggle' optClass={style.field} label='Would you like to set a toggle?' />

        <FileUpload name='logo' label='Logo' showPreview={true} />

        <fieldset>
          <legend><span>I am a legend</span></legend>
          <h3>Social channels</h3>
          <Checkbox name='email' label='Email' optClass={style.field} />
          <Checkbox name='facebook' label='Facebook' optClass={style.field} />
          <Checkbox name='twitter' label='Twitter' optClass={style.field} />
          <Checkbox name='linkedin' label='LinkedIn' optClass={style.field} />
        </fieldset>

        <Button type='submit'>Submit</Button>
        <Button optClass='inverted' onClick={this.resetForm}>Reset</Button>
      </FormGroup>
    )
  }
}

export default ExampleFormGroup
