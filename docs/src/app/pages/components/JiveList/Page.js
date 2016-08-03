import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/JiveList/JiveList'
import CodeExample from 'private/modules/CodeExample'
import ExampleJiveList from './ExampleJiveList'
import exampleJiveListCode from '!raw!./ExampleJiveList'
import styles from 'private/css/content'

const description = {
  jiveList: 'This is the `jive-list component`, which is a nickname for an input that generates an arbitrary tag list.'
}

const JiveListPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Jive List'
          description={description.jiveList}
          markup={exampleJiveListCode}>
          <ExampleJiveList />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default JiveListPage
