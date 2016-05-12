import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/PanelGroup/PanelGroup';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExamplePanelGroup from './ExamplePanelGroup'
import examplePanelGroupCode from '!raw!./ExamplePanelGroup'
import ExamplePanelGroupAccordion from './ExamplePanelGroupAccordion'
import examplePanelGroupAccordionCode from '!raw!./ExamplePanelGroupAccordion'

const description = {
  panelGroup: 'This is the `panel group component`.',
  panelGroupAccordion: 'This is the `panel group component` with accordion functionality.'
};

const PanelGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Panel Group'
          description={description.panelGroup}
          markup={examplePanelGroupCode}>
          <ExamplePanelGroup />
        </CodeExample>
        <CodeExample
          title='Example Panel Group with Accordion'
          description={description.panelGroupAccordion}
          markup={examplePanelGroupAccordionCode}>
          <ExamplePanelGroupAccordion />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default PanelGroupPage
