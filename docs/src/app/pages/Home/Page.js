import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        <h1>Ambassador React Conventions</h1>
      </div>
    )
  }
}

export default HomePage;
