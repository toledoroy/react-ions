import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        Typography stuff here.
      </div>
    )
  }
}

export default TypographyPage;
