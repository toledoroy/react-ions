import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        Colors stuff here.
      </div>
    )
  }
}

export default ColorsPage;
