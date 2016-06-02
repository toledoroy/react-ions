import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Dropdown/Dropdown';
import CodeExample from 'private/modules/CodeExample'
import ExampleDropdownButton from './ExampleDropdownButton'
import exampleDropdownButtonCode from '!raw!./ExampleDropdownButton'
import ExampleDropdownCallback from './ExampleDropdownCallback'
import exampleDropdownCallbackCode from '!raw!./ExampleDropdownCallback'
import styles from 'private/css/content'

const description = {
  dropdownButtonDefault: 'This is the **dropdown component** with a `<Button />` trigger.',
  dropdownButtonCallback: 'This is the **dropdown component** with a callback function to open.'
};

const DropdownPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Button Dropdown'
          description={description.dropdownButtonDefault}
          markup={exampleDropdownButtonCode}>
          <ExampleDropdownButton />
        </CodeExample>
        <CodeExample
          title='Dropdown with remote open'
          description={description.dropdownButtonCallback}
          markup={exampleDropdownCallbackCode}>
          <ExampleDropdownCallback />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Dropdown Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default DropdownPage
