import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Badge/Badge';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleBadgeDefault from './ExampleBadgeDefault'
import exampleBadgeDefaultCode from '!raw!./ExampleBadgeDefault'

const description = {
  badgeDefault: 'This is the `badge component`.'
};

const BadgePage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Badge'
          description={description.badgeDefault}
          markup={exampleBadgeDefaultCode}>
          <ExampleBadgeDefault />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default BadgePage
