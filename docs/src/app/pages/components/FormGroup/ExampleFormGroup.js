import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import Checkbox from 'react-conventions/lib/Checkbox'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import SelectField from 'react-conventions/lib/SelectField'
import Button from 'react-conventions/lib/Button'
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
};

class ExampleFormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    schema: {
      'subject':{
        'value':'This is my subject'
      },
      'message': {
        'value':'This is my message'
      },
      'radio': {
        'value':''
      },
      'select': {
        'value': ''
      },
      'email': {
        'value':true
      },
      'facebook': {
        'value':false
      },
      'twitter': {
        'value':true
      },
      'linkedin': {
        'value':false
      }
    }
  }

  handleChange = (fields) => {
    console.log(fields);
  }

  handleSubmit = (event, fields) => {
    event.preventDefault();
    alert(JSON.stringify(fields, 2, null));
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
          label="What happens after a promotor submits a score?"
          name="radio"
          options={fields.radio}
          defaultOption={1}
          optClass={style.field}>
        </RadioGroup>

        <SelectField
          label='Select something'
          name='select'
          options={fields.select}
          valueProp='value'
          displayProp='display'
          optClass={style.field} />

        <fieldset>
          <legend><span>I am a legend</span></legend>
          <h3>Social channels</h3>
          <Checkbox name='email' label="Email" optClass={style.field} />
          <Checkbox name='facebook' label="Facebook" optClass={style.field} />
          <Checkbox name='twitter' label="Twitter" optClass={style.field} />
          <Checkbox name='linkedin' label="LinkedIn" optClass={style.field} />
        </fieldset>

        <Button type="submit">Submit</Button>
      </FormGroup>
    );
  }
}

export default ExampleFormGroup
