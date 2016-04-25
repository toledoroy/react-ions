import React from 'react'
import Breadcrumb from 'conventions/Breadcrumb'
import CodeExample from 'global/modules/CodeExample'
import styles from '../../../../www/css/content'

class BreadcrumbPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Examples</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default BreadcrumbPage;
