import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'
import First from 'global/components/First'
import styles from '../../../www/css/content'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>First</h3>
            <p>Info about the component here.</p>
            <First test="okay" />
          </div>
        </div>
      </div>
    )
  }
}

export default FirstPage;
