import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/SortableList/SortableList'
import CodeExample from 'private/modules/CodeExample'
import ExampleSortableListDefault from './ExampleSortableListDefault'
import exampleSortableListDefaultCode from '!raw!./ExampleSortableListDefault'
import styles from 'private/css/content'

const description = {
  sortableListDefault: 'This is the `sortable list component` as it appears by default.'
}

const SortableListPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
          <CodeExample
            title='Default Sortable List'
            description={description.sortableListDefault}
            markup={exampleSortableListDefaultCode}>
            <ExampleSortableListDefault />
          </CodeExample>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
      </div>
    </div>
  </div>
)

export default SortableListPage
