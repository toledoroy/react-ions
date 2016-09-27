import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/InlineEdit/InlineEdit'
import CodeExample from 'private/modules/CodeExample'
import ExampleInlineEditDefault from './ExampleInlineEditDefault'
import exampleInlineEditDefaultCode from '!raw!./ExampleInlineEditDefault'
import ExampleInlineEditCallback from './ExampleInlineEditCallback'
import exampleInlineEditCallbackCode from '!raw!./ExampleInlineEditCallback'
import ExampleInlineEditTrigger from './ExampleInlineEditTrigger'
import exampleInlineEditTriggerCode from '!raw!./ExampleInlineEditTrigger'
import ExampleInlineEditInline from './ExampleInlineEditInline'
import exampleInlineEditInlineCode from '!raw!./ExampleInlineEditInline'
import ExampleInlineEditReadonly from './ExampleInlineEditReadonly'
import exampleInlineEditReadonlyCode from '!raw!./ExampleInlineEditReadonly'
import ExampleInlineEditLoading from './ExampleInlineEditLoading'
import exampleInlineEditLoadingCode from '!raw!./ExampleInlineEditLoading'
import ExampleInlineEditError from './ExampleInlineEditError'
import exampleInlineEditErrorCode from '!raw!./ExampleInlineEditError'
import ExampleInlineEditCopy from './ExampleInlineEditCopy'
import exampleInlineEditCopyCode from '!raw!./ExampleInlineEditCopy'
import styles from 'private/css/content'

const description = {
  inlineEditDefault: 'This is the default **inline edit component**.',
  inlineEditCallback: 'This is the **inline edit component** with a callback.',
  inlineEditTrigger: 'This is the **inline edit component** with an external edit trigger.',
  inlineEditInline: 'This is the **inline edit component** that is inline with other components.',
  inlineEditReadonly: 'This is the readonly **inline edit component**.',
  inlineEditLoading: 'This is the **inline edit component** with a loader.',
  inlineEditError: 'This is the **inline edit component** with an error.',
  inlineEditCopy: 'This is the **inline edit component** with a copy to clipboard icon.'
};

const InlineEditPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Inline Edit'
          description={description.inlineEditDefault}
          markup={exampleInlineEditDefaultCode}>
          <ExampleInlineEditDefault />
        </CodeExample>
        <CodeExample
          title='Inline Edit with a callback'
          description={description.inlineEditCallback}
          markup={exampleInlineEditCallbackCode}>
          <ExampleInlineEditCallback />
        </CodeExample>
        <CodeExample
          title='Inline Edit with an external edit trigger'
          description={description.inlineEditTrigger}
          markup={exampleInlineEditTriggerCode}>
          <ExampleInlineEditTrigger />
        </CodeExample>
        <CodeExample
          title='Inline Edit inline'
          description={description.inlineEditInline}
          markup={exampleInlineEditInlineCode}>
          <ExampleInlineEditInline />
        </CodeExample>
        <CodeExample
          title='Inline Edit readonly'
          description={description.inlineEditReadonly}
          markup={exampleInlineEditReadonlyCode}>
          <ExampleInlineEditReadonly />
        </CodeExample>
        <CodeExample
          title='Inline Edit with a loader'
          description={description.inlineEditLoading}
          markup={exampleInlineEditLoadingCode}>
          <ExampleInlineEditLoading />
        </CodeExample>
        <CodeExample
          title='Inline Edit with an error'
          description={description.inlineEditError}
          markup={exampleInlineEditErrorCode}>
          <ExampleInlineEditError />
        </CodeExample>
        <CodeExample
          title='Inline Edit with a copy to clipboard icon'
          description={description.inlineEditCopy}
          markup={exampleInlineEditCopyCode}>
          <ExampleInlineEditCopy />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default InlineEditPage
