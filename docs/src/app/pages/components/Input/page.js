import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Input/Input'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleInputDefault from './ExampleInputDefault'
import exampleInputDefaultCode from '!raw!./ExampleInputDefault'
import ExampleInputPlaceholder from './ExampleInputPlaceholder'
import exampleInputPlaceholderCode from '!raw!./ExampleInputPlaceholder'
import ExampleInputDisabled from './ExampleInputDisabled'
import exampleInputDisabledCode from '!raw!./ExampleInputDisabled'
import ExampleInputError from './ExampleInputError'
import exampleInputErrorCode from '!raw!./ExampleInputError'
import ExampleInputCallback from './ExampleInputCallback'
import exampleInputCallbackCode from '!raw!./ExampleInputCallback'

const description = {
  inputDefault: 'This is the input component as it appears by default.',
  inputPlaceholder: 'This is the input component with placeholder text.',
  inputDisabled: 'This is the disabled input component.',
  inputError: 'This is the input component with error.',
  inputCallback: 'This is the input component with a callback function. __Note__: _the `style import` and `code` tag is for display purposes only._'
};

const InputPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Input'
          description={description.inputDefault}
          markup={exampleInputDefaultCode}>
          <ExampleInputDefault />
        </CodeExample>
        <CodeExample
          title='Input with Placeholder Text'
          description={description.inputPlaceholder}
          markup={exampleInputPlaceholderCode}>
          <ExampleInputPlaceholder />
        </CodeExample>
        <CodeExample
          title='Disabled Input'
          description={description.inputDisabled}
          markup={exampleInputDisabledCode}>
          <ExampleInputDisabled />
        </CodeExample>
        <CodeExample
          title='Error Input'
          description={description.inputError}
          markup={exampleInputErrorCode}>
          <ExampleInputError />
        </CodeExample>
        <CodeExample
          title='Input with callback function(s)'
          description={description.inputCallback}
          markup={exampleInputCallbackCode}>
          <ExampleInputCallback />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default InputPage
