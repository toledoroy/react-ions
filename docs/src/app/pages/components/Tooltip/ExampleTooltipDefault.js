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
        <p>Umami four dollar toast craft beer polaroid <Tooltip content="Testing the right tooltip" open={this.state.open} tooltipPlacement={'right'}><a href="#">right tooltip</a></Tooltip>, synth keytar echo park whatever sustainable <Tooltip content="Testing the left tooltip" open={this.state.open} tooltipPlacement={'left'}><a href="#">left tooltip</a></Tooltip>. Poutine cardigan gentrify, tumblr meggings <Tooltip content="Testing the bottom tooltip" open={this.state.open} tooltipPlacement={'bottom'}><a href="#">bottom tooltip</a></Tooltip> sriracha brunch offal plaid beard. Cronut cliche cred pabst <Tooltip content="Testing the top tooltip" open={this.state.open}><a href="#">top tooltip</a></Tooltip>. Sriracha try-hard butcher, pitchfork pork belly locavore fap. Try-hard pug jean shorts raw denim distillery bicycle rights butcher. Stumptown whatever marfa cray kinfolk chartreuse. Dreamcatcher helvetica YOLO schlitz mustache, hoodie typewriter chartreuse salvia humblebrag aesthetic jean shorts knausgaard yr fixie.</p>
      </div>
    );
  }
}

export default ExampleTooltipDefault
