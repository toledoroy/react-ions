import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Alert/Alert'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleAlertsDefault from './ExampleAlertsDefault'
import exampleAlertsDefaultCode from '!raw!./ExampleAlertsDefault'

const description = {
  alertsDefault: 'This is the `alert component`.'
};

const AlertsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Alerts'
          description={description.alertsDefault}
          markup={exampleAlertsDefaultCode}>
          <ExampleAlertsDefault />
        </CodeExample>
        <div className={styles.block}>
          <h3>Tab Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default AlertsPage
