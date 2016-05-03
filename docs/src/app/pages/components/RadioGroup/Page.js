import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Radio/RadioGroup';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleRadioGroupDefault from './ExampleRadioGroupDefault'
import exampleRadioGroupDefaultCode from '!raw!./ExampleRadioGroupDefault'
import ExampleRadioGroupSelected from './ExampleRadioGroupSelected'
import exampleRadioGroupSelectedCode from '!raw!./ExampleRadioGroupSelected'
import ExampleRadioGroupRequired from './ExampleRadioGroupRequired'
import exampleRadioGroupRequiredCode from '!raw!./ExampleRadioGroupRequired'
import ExampleRadioGroupDisabled from './ExampleRadioGroupDisabled'
import exampleRadioGroupDisabledCode from '!raw!./ExampleRadioGroupDisabled'
import ExampleRadioGroupLeft from './ExampleRadioGroupLeft'
import exampleRadioGroupLeftCode from '!raw!./ExampleRadioGroupLeft'

const description = {
  radioGroupDefault: 'This is the `radio group component` as it appears by default.',
  radioGroupSelected: 'This is the selected `radio group component`.',
  radioGroupDisabled: 'This is the disabled `radio group component`.',
  radioGroupRequired: 'This is the required `radio group component`.',
  radioGroupLeft: 'This is the `radio group component` with labels on the left side.'
};

const RadioGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Radio Group'
          description={description.radioGroupDefault}
          markup={exampleRadioGroupDefaultCode}
        >
          <ExampleRadioGroupDefault />
        </CodeExample>
        <CodeExample
          title='Selected Radio Group'
          description={description.radioGroupSelected}
          markup={exampleRadioGroupSelectedCode}
        >
          <ExampleRadioGroupSelected />
        </CodeExample>
        <CodeExample
          title='Disabled Radio Group'
          description={description.radioGroupDisabled}
          markup={exampleRadioGroupDisabledCode}
        >
          <ExampleRadioGroupDisabled />
        </CodeExample>
        <CodeExample
          title='Required Radio Group'
          description={description.radioGroupRequired}
          markup={exampleRadioGroupRequiredCode}
        >
          <ExampleRadioGroupRequired />
        </CodeExample>
        <CodeExample
          title='Radio Group with labels on the left side'
          description={description.radioGroupLeft}
          markup={exampleRadioGroupLeftCode}
        >
          <ExampleRadioGroupLeft />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default RadioGroupPage;
