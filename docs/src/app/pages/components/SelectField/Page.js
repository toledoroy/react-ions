import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/SelectField/SelectField'
import CodeExample from 'private/modules/CodeExample'
import ExampleSelectFieldDefault from './ExampleSelectFieldDefault'
import exampleSelectFieldDefaultCode from '!raw!./ExampleSelectFieldDefault'
import ExampleSelectFieldDisabled from './ExampleSelectFieldDisabled'
import exampleSelectFieldDisabledCode from '!raw!./ExampleSelectFieldDisabled'
import ExampleSelectFieldSelected from './ExampleSelectFieldSelected'
import exampleSelectFieldSelectedCode from '!raw!./ExampleSelectFieldSelected'
import styles from 'private/css/content'

const description = {
  selectFieldDefault: 'This is the `select field component` as it appears by default.',
  selectFieldDisabled: 'This is the disabled `select field component`',
  selectFieldSelected: 'This is the `select field component` with a default option selected'
};

const SelectFieldPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
          <CodeExample
            title='Default Select Field'
            description={description.selectFieldDefault}
            markup={exampleSelectFieldDefaultCode}>
            <ExampleSelectFieldDefault />
          </CodeExample>
          <CodeExample
            title='Disabled Select Field'
            description={description.selectFieldDisabled}
            markup={exampleSelectFieldDisabledCode}>
            <ExampleSelectFieldDisabled />
          </CodeExample>
          <CodeExample
            title='Select Field With Default Option Selected'
            description={description.selectFieldSelected}
            markup={exampleSelectFieldSelectedCode}>
            <ExampleSelectFieldSelected />
          </CodeExample>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
      </div>
    </div>
  </div>
)

export default SelectFieldPage
