import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Checkbox/Checkbox'
import CodeExample from 'private/modules/CodeExample'
import ExampleCheckboxDefault from './ExampleCheckboxDefault'
import exampleCheckboxDefaultCode from '!raw!./ExampleCheckboxDefault'
import ExampleCheckboxChecked from './ExampleCheckboxChecked'
import exampleCheckboxCheckedCode from '!raw!./ExampleCheckboxChecked'
import ExampleCheckboxDisabled from './ExampleCheckboxDisabled'
import exampleCheckboxDisabledCode from '!raw!./ExampleCheckboxDisabled'
import ExampleCheckboxError from './ExampleCheckboxError'
import exampleCheckboxErrorCode from '!raw!./ExampleCheckboxError'
import ExampleCheckboxLeft from './ExampleCheckboxLeft'
import exampleCheckboxLeftCode from '!raw!./ExampleCheckboxLeft'
import ExampleCheckboxCallback from './ExampleCheckboxCallback'
import exampleCheckboxCallbackCode from '!raw!./ExampleCheckboxCallback'
import ExampleCheckboxToggle from './ExampleCheckboxToggle'
import exampleCheckboxToggleCode from '!raw!./ExampleCheckboxToggle'
import ExampleCheckboxCustomIcon from './ExampleCheckboxCustomIcon'
import exampleCheckboxCustomIconCode from '!raw!./ExampleCheckboxCustomIcon'
import styles from 'private/css/content'

const description = {
  checkboxDefault: 'This is the `checkbox component` as it appears by default.',
  checkboxChecked: 'This is the checked `checkbox component`.',
  checkboxDisabled: 'This is the disabled `checkbox component`.',
  checkboxError: 'This is the `checkbox component` with an error.',
  checkboxLeft: 'This is a `checkbox component` with the label on the left side.',
  checkboxCallback: 'This is the `checkbox component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  checkboxToggle: 'This is the `checkbox component` that you can toggle from the outside by changing its checked property.',
  checkboxCustomIcon: 'This is the `checkbox component` with a custom icon.'
};

const CheckboxPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Checkbox'
          description={description.checkboxDefault}
          markup={exampleCheckboxDefaultCode}>
          <ExampleCheckboxDefault />
        </CodeExample>
        <CodeExample
          title='Checked Checkbox'
          description={description.checkboxChecked}
          markup={exampleCheckboxCheckedCode}>
          <ExampleCheckboxChecked />
        </CodeExample>
        <CodeExample
          title='Disabled Checkbox'
          description={description.checkboxDisabled}
          markup={exampleCheckboxDisabledCode}>
          <ExampleCheckboxDisabled />
        </CodeExample>
        <CodeExample
          title='Error Checkbox'
          description={description.checkboxError}
          markup={exampleCheckboxErrorCode}>
          <ExampleCheckboxError />
        </CodeExample>
        <CodeExample
          title='Checkbox Left Label'
          description={description.checkboxLeft}
          markup={exampleCheckboxLeftCode}>
          <ExampleCheckboxLeft />
        </CodeExample>
        <CodeExample
          title='Checkbox with callback function'
          description={description.checkboxCallback}
          markup={exampleCheckboxCallbackCode}>
          <ExampleCheckboxCallback />
        </CodeExample>
        <CodeExample
          title='Checkbox that can be toggled from the outside'
          description={description.checkboxToggle}
          markup={exampleCheckboxToggleCode}>
          <ExampleCheckboxToggle />
        </CodeExample>
        <CodeExample
          title='Checkbox with a custom icon'
          description={description.checkboxCustomIcon}
          markup={exampleCheckboxCustomIconCode}>
          <ExampleCheckboxCustomIcon />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
);

export default CheckboxPage
