import React from 'react';
import ProgressBar from 'global/components';
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!global/components/ProgressBar/ProgressBar.js';
import styles from '../../../www/css/content';

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Progress Bar</h3>
            <p>Toy mouse squeak roll over ears back wide eyed eat the fat cats.</p>
            <ProgressBar value={20} denominator={100} />
          </div>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBarPage;
