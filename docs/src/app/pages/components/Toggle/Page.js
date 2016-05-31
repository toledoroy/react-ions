import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Toggle/Toggle'
import CodeExample from 'private/modules/CodeExample'
import ExampleToggleDefault from './ExampleToggleDefault'
import exampleToggleDefaultCode from '!raw!./ExampleToggleDefault'
import ExampleToggleOn from './ExampleToggleOn'
import exampleToggleOnCode from '!raw!./ExampleToggleOn'
import ExampleToggleDisabled from './ExampleToggleDisabled'
import exampleToggleDisabledCode from '!raw!./ExampleToggleDisabled'
import ExampleToggleError from './ExampleToggleError'
import exampleToggleErrorCode from '!raw!./ExampleToggleError'
import ExampleToggleCallback from './ExampleToggleCallback'
import exampleToggleCallbackCode from '!raw!./ExampleToggleCallback'
import styles from 'private/css/content'

const description = {
  toggleDefault: 'This is the `toggle component` as it appears by default.',
  toggleOn: 'This is the `toggle component` with initial state On',
  toggleDisabled: 'This is the disabled `toggle component`',
  toggleError: 'This is the `toggle component` with an error.',
  toggleCallback: 'This is the `toggle component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.'
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
          title='Toggle On'
          description={description.toggleOn}
          markup={exampleToggleOnCode}>
          <ExampleToggleOn />
        </CodeExample>
        <CodeExample
          title='Disabled Toggle'
          description={description.toggleDisabled}
          markup={exampleToggleDisabledCode}>
          <ExampleToggleDisabled />
        </CodeExample>
        <CodeExample
          title='Error Toggle'
          description={description.toggleError}
          markup={exampleToggleErrorCode}>
          <ExampleToggleError />
        </CodeExample>
        <CodeExample
          title='Toggle with callback function'
          description={description.toggleCallback}
          markup={exampleToggleCallbackCode}>
          <ExampleToggleCallback />
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
