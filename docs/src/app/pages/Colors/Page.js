import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        Colors stuff here.
      </div>
    )
  }
}

export default ColorsPage;
