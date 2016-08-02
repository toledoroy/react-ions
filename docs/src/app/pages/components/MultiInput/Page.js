import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/MultiInput/MultiInput'
import CodeExample from 'private/modules/CodeExample'
import ExampleMultiInput from './ExampleMultiInput'
import exampleMultiInputCode from '!raw!./ExampleMultiInput'
import styles from 'private/css/content'

const description = {
  multiInput: 'This is the `multi-input field component`.'
}

const MultiInputPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
          <CodeExample
            title='Multi Input'
            description={description.multiInput}
            markup={exampleMultiInputCode}>
            <ExampleMultiInput />
          </CodeExample>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
      </div>
    </div>
  </div>
)

export default MultiInputPage
