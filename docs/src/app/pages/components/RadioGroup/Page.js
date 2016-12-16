import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/Radio/RadioGroup'
import CodeExample from 'private/modules/CodeExample'
import ExampleRadioDefault from './ExampleRadioGroupDefault'
import exampleRadioDefaultCode from '!raw!./ExampleRadioGroupDefault'
import ExampleRadioChecked from './ExampleRadioGroupChecked'
import exampleRadioCheckedCode from '!raw!./ExampleRadioGroupChecked'
import ExampleRadioRequired from './ExampleRadioGroupRequired'
import exampleRadioRequiredCode from '!raw!./ExampleRadioGroupRequired'
import ExampleRadioDisabled from './ExampleRadioGroupDisabled'
import exampleRadioDisabledCode from '!raw!./ExampleRadioGroupDisabled'
import ExampleRadioLeft from './ExampleRadioGroupLeft'
import exampleRadioLeftCode from '!raw!./ExampleRadioGroupLeft'
import ExampleRadioCallback from './ExampleRadioGroupCallback'
import exampleRadioCallbackCode from '!raw!./ExampleRadioGroupCallback'
import ExampleRadioChild from './ExampleRadioChild'
import exampleRadioChildCode from '!raw!./ExampleRadioChild'
import styles from 'private/css/content'

const description = {
  radioDefault: 'This is the `radio component` as it appears by default.',
  radioChecked: 'This is the checked `radio component`.',
  radioDisabled: 'This is the disabled `radio component`.',
  radioRequired: 'This is the required `radio component`.',
  radioLeft: 'This is the `radio component` with labels on the left side.',
  radioCallback: 'This is the `radio component` with a callback function. __Note__: the `style import` and `code` tag is for display purposes only.',
  radioChild: 'This is the `radio component` with a child component.'
}

const RadioPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Radio'
          description={description.radioDefault}
          markup={exampleRadioDefaultCode}>
          <ExampleRadioDefault />
        </CodeExample>
        <CodeExample
          title='Checked Radio'
          description={description.radioChecked}
          markup={exampleRadioCheckedCode}>
          <ExampleRadioChecked />
        </CodeExample>
        <CodeExample
          title='Disabled Radio'
          description={description.radioDisabled}
          markup={exampleRadioDisabledCode}>
          <ExampleRadioDisabled />
        </CodeExample>
        <CodeExample
          title='Required Radio'
          description={description.radioRequired}
          markup={exampleRadioRequiredCode}>
          <ExampleRadioRequired />
        </CodeExample>
        <CodeExample
          title='Radio with labels on the left side'
          description={description.radioLeft}
          markup={exampleRadioLeftCode}>
          <ExampleRadioLeft />
        </CodeExample>
        <CodeExample
          title='Radio with callback function'
          description={description.radioCallback}
          markup={exampleRadioCallbackCode}>
          <ExampleRadioCallback />
        </CodeExample>
        <CodeExample
          title='Radio with child component'
          description={description.radioChild}
          markup={exampleRadioChildCode}>
          <ExampleRadioChild />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default RadioPage
