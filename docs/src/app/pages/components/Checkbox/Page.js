import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Checkbox/Checkbox';
import CodeExample from 'private/modules/CodeExample'
import ExampleCheckboxDefault from './ExampleCheckboxDefault'
import exampleCheckboxDefaultCode from '!raw!./ExampleCheckboxDefault'
import ExampleCheckboxDisabled from './ExampleCheckboxDisabled'
import exampleCheckboxDisabledCode from '!raw!./ExampleCheckboxDisabled'
import styles from 'private/css/content'

const description = {
  checkboxDefault: 'This is the `checkbox component` as it appears by default.',
  checkboxDisabled: 'This is the disabled `checkbox component`.'
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
          title='Disabled Checkbox'
          description={description.checkboxDisabled}
          markup={exampleCheckboxDisabledCode}>
          <ExampleCheckboxDisabled />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
);

export default CheckboxPage;
