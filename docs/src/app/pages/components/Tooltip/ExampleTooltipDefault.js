import React from 'react'
import Tooltip from 'react-conventions/lib/Tooltip'

class ExampleTooltipDefault extends React.Component {
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
        <p>Umami four dollar toast craft beer polaroid <Tooltip content="Testing the right tooltip" tooltipPlacement={'right'}><a href="#">right</a></Tooltip> tooltip, synth keytar echo park whatever sustainable <Tooltip content="Testing the left tooltip" tooltipPlacement={'left'}><a href="#">left</a></Tooltip> tooltip. Poutine cardigan gentrify, tumblr meggings <Tooltip content="Testing the bottom tooltip" tooltipPlacement={'bottom'}><a href="#">bottom</a></Tooltip> tooltip sriracha brunch offal plaid beard. Cronut cliche cred pabst <Tooltip content="Testing the top tooltip" open={this.state.open}><a href="#">top</a></Tooltip> tooltip.</p>
      </div>
    );
  }
}

export default ExampleTooltipDefault
