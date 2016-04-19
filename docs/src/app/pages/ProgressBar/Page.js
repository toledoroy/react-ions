import React from 'react'
import { Breadcrumb, ProgressBar } from 'global/components'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <ProgressBar value={20} denominator={100} />
      </div>
    )
  }
}

export default ProgressBarPage;
