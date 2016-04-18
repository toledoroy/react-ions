import React from 'react'
import Breadcrumb from 'components/Breadcrumb'

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation="Hey" />
        Colors stuff here.
      </div>
    )
  }
}

export default ColorsPage;
