import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Checkbox/Checkbox';
import CodeExample from 'private/modules/CodeExample'
import ExampleCheckboxDefault from './ExampleCheckboxDefault'
import exampleCheckboxDefaultCode from '!raw!./ExampleCheckboxDefault'
import ExampleCheckboxChecked from './ExampleCheckboxChecked'
import exampleCheckboxCheckedCode from '!raw!./ExampleCheckboxChecked'
import ExampleCheckboxDisabled from './ExampleCheckboxDisabled'
import exampleCheckboxDisabledCode from '!raw!./ExampleCheckboxDisabled'
import ExampleCheckboxError from './ExampleCheckboxError'
import exampleCheckboxErrorCode from '!raw!./ExampleCheckboxError'
import styles from 'private/css/content'

const description = {
  checkboxDefault: 'This is the `checkbox component` as it appears by default.',
  checkboxChecked: 'This is the checked `checkbox component`.',
  checkboxDisabled: 'This is the disabled `checkbox component`.',
  checkboxError: 'This is the `checkbox component` with error.'
};

const CheckboxPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
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
      </div>
      <CodeExample
        title='Error Checkbox'
        description={description.checkboxError}
        markup={exampleCheckboxErrorCode}>
        <ExampleCheckboxError />
      </CodeExample>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
);

export default CheckboxPage;
