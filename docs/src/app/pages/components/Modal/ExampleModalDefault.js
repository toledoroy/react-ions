import React from 'react'
import Modal from 'react-conventions/lib/Modal'
import Button from 'react-conventions/lib/Button'

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
    const actions = [];

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          title="Dialog With Actions"
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Modal>
      </div>
    );
  }
}

export default ExampleModalDefault
