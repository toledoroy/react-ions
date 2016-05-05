import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Badge/Badge';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleBadges from './ExampleBadges'
import exampleBadgesCode from '!raw!./ExampleBadges'

const description = {
  badges: 'This is the `badge component`.'
};

const BadgePage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Badges'
          description={description.badges}
          markup={exampleBadgesCode}>
          <ExampleBadges />
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
