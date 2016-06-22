import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import style from 'react-conventions/lib/FormGroup/style'

class ExampleFormGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    parentSchema: {
      'subject': {
        'value': 'Parent subject'
      },
      'message': {
        'value': 'Parent message'
      }
    },
    nestedSchema: {
      'subject': {
        'value': 'Nested subject'
      },
      'message': {
        'value': 'Nested message'
      }
    }
  }

  handleChange = (fields) => {
    console.log(fields)
  }

  render() {
    return (
      <FormGroup
        changeCallback={this.handleChange}
        schema={this.state.parentSchema}>
        <fieldset>
          <legend><span>Parent Form</span></legend>
          <Input name='subject' label='Subject line' type='text' optClass={style.field} />
          <Textarea name='message' label='Message' optClass={style.field} />
        </fieldset>

        <FormGroup
          nested={true}
          changeCallback={this.handleChange}
          schema={this.state.nestedSchema}>
          <fieldset>
            <legend><span>Nested Form</span></legend>
            <Input name='subject' label='Subject line' type='text' optClass={style.field} />
            <Textarea name='message' label='Message' optClass={style.field} />
          </fieldset>
        </FormGroup>
      </FormGroup>
    )
  }
}

export default ExampleFormGroup
