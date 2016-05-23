import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/FormGroup/FormGroup'
import CodeExample from 'private/modules/CodeExample'
import ExampleFormGroup from './ExampleFormGroup'
import exampleFormGroupCode from '!raw!./ExampleFormGroup'
import ExampleFormGroupInline from './ExampleFormGroupInline'
import exampleFormGroupInlineCode from '!raw!./ExampleFormGroupInline'
import styles from 'private/css/content'

const description = {
  formGroup: 'This is an example `form group` component with stacked elements',
  formGroupInline: 'This is an example `form group` component with inline elements'
};

const FormGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Form Group'
          description={description.formGroup}
          markup={exampleFormGroupCode}>
          <ExampleFormGroup />
        </CodeExample>
        <CodeExample
          title='Form Group Inline'
          description={description.formGroupInline}
          markup={exampleFormGroupInlineCode}>
          <ExampleFormGroupInline />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
);

export default FormGroupPage
