import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        Layout stuff here
      </div>
    )
  }
}

export default LayoutPage;
