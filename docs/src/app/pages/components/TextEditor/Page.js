import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/TextEditor/TextEditor'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTextEditorDefault from './ExampleTextEditorDefault'
import exampleTextEditorDefaultCode from '!raw!./ExampleTextEditorDefault'


const description = {
  textEditorDefault: 'This is the `text editor component` as it appears by default.'
}

const TextEditorPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default TextEditor'
          description={description.textEditorDefault}
          markup={exampleTextEditorDefaultCode}>
          <ExampleTextEditorDefault />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TextEditorPage
