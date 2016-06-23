import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/MultiSelect/MultiSelect'
import CodeExample from 'private/modules/CodeExample'
import ExampleMultiSelectDefault from './ExampleMultiSelectDefault'
import exampleMultiSelectDefaultCode from '!raw!./ExampleMultiSelectDefault'
import styles from 'private/css/content'

const description = {
  multiSelectDefault: 'This is the `select field component` as it appears by default.'
}

const SelectFieldPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
          <CodeExample
            title='Default Select Field'
            description={description.multiSelectDefault}
            markup={exampleMultiSelectDefaultCode}>
            <ExampleMultiSelectDefault />
          </CodeExample>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
      </div>
    </div>
  </div>
)

export default SelectFieldPage
