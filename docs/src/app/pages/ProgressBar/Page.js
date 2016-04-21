import React from 'react'
import { Breadcrumb, ProgressBar } from 'global/components'
import docs from '!!docgen!global/components/ProgressBar/ProgressBar.js'
import styles from '../../../www/css/content'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Progress Bar</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
            <ProgressBar value={20} denominator={100} />
            <h3>Props</h3>
            <pre>{JSON.stringify(docs[0].props, null, 2) }</pre>
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBarPage;
