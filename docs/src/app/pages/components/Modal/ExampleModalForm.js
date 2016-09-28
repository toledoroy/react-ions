import React from 'react'
import Modal from 'react-conventions/lib/Modal'
import Button from 'react-conventions/lib/Button'
import SelectField from 'react-conventions/lib/SelectField'
import Input from 'react-conventions/lib/Input'
import FormGroup from 'react-conventions/lib/FormGroup'
import style from './style'

class ExampleModalForm extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false,
    schema: {
      first_name: {
        value: ''
      },
      last_name: {
        value: ''
      },
      email: {
        value: ''
      },
      company: {
        value: ''
      },
      role: {
        value: ''
      }
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <Button onClick={this.handleClose} optClass="inverted">Cancel</Button>,
      <Button onClick={this.handleClose}>Submit</Button>
    ]

    const roles = [
      {
        display: 'Admin',
        value: 'admin'
      }, {
        display: 'Developer',
        value: 'developer'
      }, {
        display: 'Sales',
        value: 'sales'
      }, {
        display: 'Marketing',
        value: 'marketing'
      }
    ]

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Form Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          size='sm'
        >
          <FormGroup schema={this.state.schema} optClass={style['example-modal-form']}>
            <div>
              <label>First Name</label>
              <Input name='first_name' />
            </div>
            <div>
              <label>Last Name</label>
              <Input name='last_name' />
            </div>
            <div>
              <label>Email</label>
              <Input name='email' />
            </div>
            <div>
              <label>Company</label>
              <Input name='company' />
            </div>
            <div>
              <label>Roles</label>
              <SelectField name='role' options={roles} valueProp='value' displayProp='display' optClass={style.select} />
            </div>
          </FormGroup>
        </Modal>
      </div>
    )
  }
}

export default ExampleModalForm
