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
        <Tooltip text="Default Tooltip" open={this.state.open} tooltipPlacement={'right'}>test right</Tooltip>
        <Tooltip text="Default Tooltip" open={this.state.open} tooltipPlacement={'left'}>test left</Tooltip>
        <Tooltip text="Default Tooltip" open={this.state.open} tooltipPlacement={'bottom'}>test bottom</Tooltip>
        <Tooltip text="Default Tooltip" open={this.state.open}>test</Tooltip>
      </div>
    );
  }
}

export default ExampleTooltipDefault
