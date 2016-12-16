import React from 'react'
import Modal from 'react-ions/lib/Modal'
import Button from 'react-ions/lib/Button'

class ExampleModalDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Default Modal"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>This is the modal component as it appears by default.</p>
          <p>You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.</p>
        </Modal>
      </div>
    );
  }
}

export default ExampleModalDefault
