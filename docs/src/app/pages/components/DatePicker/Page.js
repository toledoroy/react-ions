import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import ExampleDatePickerDefault from './ExampleDatePickerDefault'
import exampleDatePickerDefaultCode from '!raw!./ExampleDatePickerDefault'
import ExampleDatePickerSelected from './ExampleDatePickerSelected'
import exampleDatePickerSelectedCode from '!raw!./ExampleDatePickerSelected'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/DatePicker/DatePicker'
import styles from 'private/css/content'

const description = {
  default: 'This is the default `DatePicker component`.'
}

const DatePickerPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Default Date Picker'
          description={description.default}
          markup={exampleDatePickerDefaultCode}>
          <ExampleDatePickerDefault />
        </CodeExample>
        <CodeExample
          title='Example Date Picker with Selected Date'
          description={description.default}
          markup={exampleDatePickerSelectedCode}>
          <ExampleDatePickerSelected />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default DatePickerPage
