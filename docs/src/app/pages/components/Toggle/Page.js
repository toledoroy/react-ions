import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Toggle/Toggle'
import CodeExample from 'private/modules/CodeExample'
import ExampleToggleDefault from './ExampleToggleDefault'
import exampleToggleDefaultCode from '!raw!./ExampleToggleDefault'
import ExampleToggleDisabled from './ExampleToggleDisabled'
import exampleToggleDisabledCode from '!raw!./ExampleToggleDisabled'
import styles from 'private/css/content'

const description = {
  toggleDefault: 'This is the `toggle component` as it appears by default.',
  toggleDisabled: 'This is the disabled `toggle component`'
};

const TogglePage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Toggle'
          description={description.toggleDefault}
          markup={exampleToggleDefaultCode}>
          <ExampleToggleDefault />
        </CodeExample>
        <CodeExample
          title='Disabled Toggle'
          description={description.toggleDisabled}
          markup={exampleToggleDisabledCode}>
          <ExampleToggleDisabled />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
);

export default TogglePage
