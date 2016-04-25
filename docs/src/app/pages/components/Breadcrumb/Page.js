import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import styles from '../../../../www/css/content'

class BreadcrumbPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
