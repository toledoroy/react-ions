import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Radio/RadioGroup';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleRadioDefault from './ExampleRadioDefault'
import exampleRadioDefaultCode from '!raw!./ExampleRadioDefault'
// import ExampleRadioSelected from './ExampleRadioSelected'
// import exampleRadioSelectedCode from '!raw!./ExampleRadioSelected'
// import ExampleRadioDisabled from './ExampleRadioDisabled'
// import exampleRadioDisabledCode from '!raw!./ExampleRadioDisabled'
// import ExampleRadioError from './ExampleRadioError'
// import exampleRadioErrorCode from '!raw!./ExampleRadioError'
// import ExampleRadioLeft from './ExampleRadioLeft'
// import exampleRadioLeftCode from '!raw!./ExampleRadioLeft'

const description = {
  radioDefault: 'This is the `radio component` as it appears by default.',
  radioSelected: 'This is the selected `radio component`.',
  radioDisabled: 'This is the disabled `radio component`.',
  radioError: 'This is the `radio component` with error.',
  radioLeft: 'This is a `radio component` with the label on the left side.'
};

const RadioPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
          <CodeExample
            title='Default Radio'
            description={description.radioDefault}
            markup={exampleRadioDefaultCode}
          >
            <ExampleRadioDefault />
          </CodeExample>
          <div className={styles.block}>
            <h3>Props</h3>
            <PropsList list={docs[0].props} />
          </div>
      </div>
    </div>
  </div>
)

export default RadioPage;
