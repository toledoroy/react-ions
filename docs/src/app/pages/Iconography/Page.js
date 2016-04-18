import React from 'react'
import Breadcrumb from 'modules/Breadcrumb'

class IconographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeDetails={this.props.route} />
        Iconography stuff here.
      </div>
    )
  }
}

export default IconographyPage;
