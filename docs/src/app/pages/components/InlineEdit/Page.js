import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Icon/Icon'
import CodeExample from 'private/modules/CodeExample'
import ExampleInlineEditDefault from './ExampleInlineEditDefault'
import exampleInlineEditDefaultCode from '!raw!./ExampleInlineEditDefault'
import styles from 'private/css/content'

const InlineEditPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Icon'
          description='test'
          markup={exampleInlineEditDefaultCode}>
          <ExampleInlineEditDefault />
        </CodeExample>
      </div>
    </div>
  </div>
)

export default InlineEditPage
