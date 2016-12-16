import React from 'react'
import PropsList from 'private/modules/PropsList'
import tabWrapperDocs from '!!docgen!react-ions/lib/TabWrapper/TabWrapper'
import tabDocs from '!!docgen!react-ions/lib/TabWrapper/Tab'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTabWrapperDefault from './ExampleTabWrapperDefault'
import exampleTabWrapperDefaultCode from '!raw!./ExampleTabWrapperDefault'
import ExampleTabWrapperSecondary from './ExampleTabWrapperSecondary'
import exampleTabWrapperSecondaryCode from '!raw!./ExampleTabWrapperSecondary'

const description = {
  tabWrapperDefault: 'This is the `tab wrapper component` as it appears by default.',
  tabWrapperSecondary: 'This is the secondary style for the `tab wrapper component`.'
};

const TabWrapperPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Tab Wrapper'
          description={description.tabWrapperDefault}
          markup={exampleTabWrapperDefaultCode}>
          <ExampleTabWrapperDefault />
        </CodeExample>
        <CodeExample
          title='Secondary Tab Wrapper'
          description={description.tabWrapperSecondary}
          markup={exampleTabWrapperSecondaryCode}>
          <ExampleTabWrapperSecondary />
        </CodeExample>
        <div className={styles.block}>
          <h3>Tab Wrapper Props</h3>
          <PropsList list={tabWrapperDocs[0].props} />
        </div>
        <div className={styles.block}>
          <h3>Tab Props</h3>
          <PropsList list={tabDocs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TabWrapperPage
