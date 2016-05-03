import React from 'react'
import Modal from 'react-conventions/lib/Modal'
import Button from 'react-conventions/lib/Button'

class ExampleModalSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <Button onClick={this.handleClose} optClass="inverted">Cancel</Button>,
      <Button onClick={this.handleClose}>Submit</Button>
    ];

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Small Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
          size='sm'
        >
          <p>This is a small modal.</p>
        </Modal>
      </div>
    );
  }
}

export default ExampleModalSmall
