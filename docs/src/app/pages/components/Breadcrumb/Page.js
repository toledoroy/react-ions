import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Breadcrumb/Breadcrumb';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleBreadcrumbDefault from './ExampleBreadcrumbDefault'
import exampleBreadcrumbDefaultCode from '!raw!./ExampleBreadcrumbDefault'

const description = {
  breadcrumbDefault: 'This is the `breadcrumb component` showing a page with a subpage.'
};

const BreadcrumbsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
        <CodeExample
          title='Default Breadcrumb'
          description={description.breadcrumbDefault}
          markup={exampleBreadcrumbDefaultCode}>
          <ExampleBreadcrumbDefault />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default BreadcrumbsPage
