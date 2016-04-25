import React from 'react'
import Breadcrumb from 'conventions/Breadcrumb'
import CodeExample from 'global/modules/CodeExample'
import ExampleProgressBarDefault from './ExampleProgressBarDefault'
import exampleProgressBarDefaultCode from '!raw!./ExampleProgressBarDefault'
import styles from '../../../../www/css/content'

const description = {
  progressBarDefault: 'This is the `default Progress Bar` description [passed](https://www.getambassador.com) in through a constant.'
};

const ProgressBarPage = () => (
  <div>
    <Breadcrumb routeLocation={location.pathname} />
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Progress Bar'
          description={description.progressBarDefault}
          markup={exampleProgressBarDefaultCode}
        >
          <ExampleProgressBarDefault />
        </CodeExample>
      </div>
    </div>
  </div>
);

export default ProgressBarPage;
