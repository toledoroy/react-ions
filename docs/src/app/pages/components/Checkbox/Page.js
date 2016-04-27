import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Checkbox/Checkbox';
import CodeExample from 'private/modules/CodeExample'
import ExampleCheckboxDefault from './ExampleCheckboxDefault'
import exampleCheckboxDefaultCode from '!raw!./ExampleCheckboxDefault'
import styles from 'private/css/content'

const description = {
  checkboxDefault: 'This is the `default Checkbox` with only a `label` property.'
};

const CheckboxPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Checkbox'
          description={description.checkboxDefault}
          markup={exampleCheckboxDefaultCode}
        >
          <ExampleCheckboxDefault />
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
