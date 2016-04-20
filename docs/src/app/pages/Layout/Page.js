import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'

class LayoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        Layout stuff here
      </div>
    )
  }
}

export default LayoutPage;
