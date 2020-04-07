import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/lib/components/MultiSelect/MultiSelect'
import CodeExample from 'private/modules/CodeExample'
import ExampleMultiSelectField from './ExampleMultiSelectField'
import exampleMultiSelectFieldCode from '!raw!./ExampleMultiSelectField'
import ExampleMultiTypeahead from './ExampleMultiTypeahead'
import exampleMultiTypeaheadCode from '!raw!./ExampleMultiTypeahead'
import ExampleMultiTypeaheadSearch from './ExampleMultiTypeaheadSearch'
import exampleMultiTypeaheadSearchCode from '!raw!./ExampleMultiTypeaheadSearch'
import ExampleMultiSelectFieldObject from './ExampleMultiSelectFieldObject'
import exampleMultiSelectFieldObjectCode from '!raw!./ExampleMultiSelectFieldObject'
import ExampleCustomTaglist from './ExampleCustomTaglist'
import exampleCustomTaglistCode from '!raw!./ExampleCustomTaglist'

import styles from 'private/css/content'

const description = {
  multiSelectField: 'This is the `multi select field component`.',
  multiTypeahead: 'This is the `multi typeahead component`.',
  multiTypeaheadSearch: 'This is the `multi typeahead component` with `searchCallback`.',
  multiSelectFieldObject: 'This is the `multi select field component` with an HOC that returns the original selected object, instead of the value.',
  customTaglist: 'This is the `multi select field component` with a customized list of selected items.',
}

const SelectFieldPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Multi Select Field'
          description={description.multiSelectField}
          markup={exampleMultiSelectFieldCode}>
          <ExampleMultiSelectField />
        </CodeExample>
        <CodeExample
          title='Multi Typeahead'
          description={description.multiTypeahead}
          markup={exampleMultiTypeaheadCode}>
          <ExampleMultiTypeahead />
        </CodeExample>
        <CodeExample
          title='Multi Typeahead with searchCallback'
          description={description.multiTypeaheadSearch}
          markup={exampleMultiTypeaheadSearchCode}>
          <ExampleMultiTypeaheadSearch />
        </CodeExample>
        <CodeExample
          title='Multi Typeahead with return object value'
          description={description.multiSelectFieldObject}
          markup={exampleMultiSelectFieldObjectCode}>
          <ExampleMultiSelectFieldObject />
        </CodeExample>
        <CodeExample
          title='Multi Select Field with a customized list of selected items'
          description={description.customTaglist}
          markup={exampleCustomTaglistCode}>
          <ExampleCustomTaglist />
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
