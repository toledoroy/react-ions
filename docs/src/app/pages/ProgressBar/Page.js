import React from 'react';
import { Breadcrumb, ProgressBar } from 'global/components';
import styles from '../../../www/css/content';

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Progress Bar</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
            <ProgressBar value={20} denominator={100} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBarPage;