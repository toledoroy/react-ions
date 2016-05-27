import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/FileUpload/FileUpload'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleFileUploadDefault from './ExampleFileUploadDefault'
import exampleFileUploadDefault from '!raw!./ExampleFileUploadDefault'
import ExampleFileUploadMultiple from './ExampleFileUploadMultiple'
import exampleFileUploadMultiple from '!raw!./ExampleFileUploadMultiple'
import ExampleFileUploadPreview from './ExampleFileUploadPreview'
import exampleFileUploadPreview from '!raw!./ExampleFileUploadPreview'

const description = {
  fileUploadDefault: 'This is the `file upload component` as it appears by default.',
  fileUploadMultiple: 'This is the `file upload component` that allows multiple files to be uploaded.',
  fileUploadPreview: 'This is the `file upload component` as it appears by Preview.'
};

const FileUploadPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default File Upload'
          description={description.fileUploadDefault}
          markup={exampleFileUploadDefault}>
          <ExampleFileUploadDefault />
        </CodeExample>
        <CodeExample
          title='File Upload with Preview'
          description={description.fileUploadPreview}
          markup={exampleFileUploadPreview}>
          <ExampleFileUploadPreview />
        </CodeExample>
        <CodeExample
          title='Multiple File Upload'
          description={description.fileUploadMultiple}
          markup={exampleFileUploadMultiple}>
          <ExampleFileUploadMultiple />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default FileUploadPage
