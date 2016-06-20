import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Typeahead/Typeahead'
import CodeExample from 'private/modules/CodeExample'
import ExampleTypeaheadDefault from './ExampleTypeaheadDefault'
import exampleTypeaheadDefaultCode from '!raw!./ExampleTypeaheadDefault'
import ExampleTypeaheadDisabled from './ExampleTypeaheadDisabled'
import exampleTypeaheadDisabledCode from '!raw!./ExampleTypeaheadDisabled'
import ExampleTypeaheadDefaultValue from './ExampleTypeaheadDefaultValue'
import exampleTypeaheadDefaultValueCode from '!raw!./ExampleTypeaheadDefaultValue'
import styles from 'private/css/content'

const description = {
  typeaheadDefault: 'This is the `typeahead component` as it appears by default.',
  typeaheadDisabled: 'This is the `typeahead component` in a disabled state.',
  typeaheadDefaultValue: 'This is the `typeahead component` with a default value.',
}

const TypeaheadPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Typeahead with Placeholder text'
          description={description.typeaheadDefault}
          markup={exampleTypeaheadDefaultCode}>
          <ExampleTypeaheadDefault />
        </CodeExample>
        <CodeExample
          title='Disabled Typeahead'
          description={description.typeaheadDisabled}
          markup={exampleTypeaheadDisabledCode}>
          <ExampleTypeaheadDisabled />
        </CodeExample>
        <CodeExample
          title='Typeahead with default value'
          description={description.typeaheadDefaultValue}
          markup={exampleTypeaheadDefaultValueCode}>
          <ExampleTypeaheadDefaultValue />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TypeaheadPage
