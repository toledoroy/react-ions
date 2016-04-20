import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'

class IconographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        Iconography stuff here.
      </div>
    )
  }
}

export default IconographyPage;
