import React from 'react'
import FormGroup from 'react-conventions/lib/FormGroup'
import Input from 'react-conventions/lib/Input'
import Textarea from 'react-conventions/lib/Textarea'
import Checkbox from 'react-conventions/lib/Checkbox'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import SelectField from 'react-conventions/lib/SelectField'
import Button from 'react-conventions/lib/Button'
import ButtonGroup from 'react-conventions/lib/ButtonGroup/ButtonGroup'
import Icon from 'react-conventions/lib/Icon'
import style from 'react-conventions/lib/FormGroup/style'

const fields = {
  selectField: [
    {value: 0, display: 'Time since last NPS survey was received'},
    {value: 1, display: 'Time since last NPS survey was completed'}
  ],
  selectField2: [
    {value: 0, display: 'less than'},
    {value: 1, display: 'greater than'}
  ],
  selectField3: [
    {value: 0, display: 'months ago'},
    {value: 1, display: 'years ago'}
  ],
  buttonGroup: [
    {value: 'and', label: 'And'},
    {value: 'or', label: 'Or'}
  ]
};

const ExampleFormGroup = () => (
  <FormGroup
    schema={
      {
        'selectField': {
          'value':''
        },
        'selectField2': {
          'value':''
        },
        'selectField3': {
          'value':''
        },
        'buttonGroup': {
          'value':''
        },
        'input': {
          'value':'3'
        }
      }
    }>

    <fieldset className={style.row}>
      <legend><span>Inline select fields with a couple of extras</span></legend>
      <SelectField name='selectField' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
      <SelectField name='selectField2' options={fields.selectField2} valueProp='value' displayProp='display' optClass={style.field} />
      <Input name='num' type='text' optClass={style.field} />
      <SelectField name='selectField3' options={fields.selectField3} valueProp='value' displayProp='display' optClass={style.field} />
    </fieldset>
    <fieldset className={style.row}>
      <ButtonGroup name="buttonGroup" options={fields.buttonGroup} defaultOption={0}></ButtonGroup>
      <SelectField name='selectField' options={fields.selectField} valueProp='value' displayProp='display' optClass={style.field} />
      <SelectField name='selectField2' options={fields.selectField2} valueProp='value' displayProp='display' optClass={style.field} />
      <Input name='input' type='text' optClass={style.field} />
      <SelectField name='selectField3' options={fields.selectField3} valueProp='value' displayProp='display' optClass={style.field} />
      <div className={style['remove-item']}>
        <Icon name='icon-delete-1' height='16' width='16' fill='#233040' />
      </div>
    </fieldset>

  </FormGroup>
)

export default ExampleFormGroup
