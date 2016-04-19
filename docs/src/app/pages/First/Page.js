import React from 'react'
import Breadcrumb from 'global/components'
import First from 'global/components'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div>
          <h2>First</h2>
          <p>Info about the component here.</p>
          <First test="okay" />
        </div>
      </div>
    )
  }
}

export default FirstPage;
