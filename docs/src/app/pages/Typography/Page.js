import React from 'react'
import Breadcrumb from 'global/components'

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        Typography stuff here.
      </div>
    )
  }
}

export default TypographyPage;
