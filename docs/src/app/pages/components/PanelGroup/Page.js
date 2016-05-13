import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/PanelGroup/PanelGroup';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExamplePanelGroup from './ExamplePanelGroup'
import examplePanelGroupCode from '!raw!./ExamplePanelGroup'
import ExamplePanelGroupAccordion from './ExamplePanelGroupAccordion'
import examplePanelGroupAccordionCode from '!raw!./ExamplePanelGroupAccordion'
import ExamplePanelGroupMultiStep from './ExamplePanelGroupMultiStep'
import ExamplePanelGroupMultiStepCode from '!raw!./ExamplePanelGroupMultiStep'
import ExamplePanelGroupSimple from './ExamplePanelGroupSimple'
import ExamplePanelGroupSimpleCode from '!raw!./ExamplePanelGroupSimple'

const description = {
  panelGroup: 'This is the default `panel group component`.',
  panelGroupAccordion: 'This is the default `panel group component` with accordion functionality.',
  panelGroupMultiStep: 'This is the `panel group component` with a multi-step design variation.',
  panelGroupSimple: 'This is the `panel group component` with simple stylez.'
};

const PanelGroupPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Panel Group'
          description={description.panelGroup}
          markup={examplePanelGroupCode}>
          <ExamplePanelGroup />
        </CodeExample>
        <CodeExample
          title='Default Panel Group with Accordion'
          description={description.panelGroupAccordion}
          markup={examplePanelGroupAccordionCode}>
          <ExamplePanelGroupAccordion />
        </CodeExample>
        <CodeExample
          title='Panel Group: Multi-Step'
          description={description.panelGroupMultiStep}
          markup={ExamplePanelGroupMultiStepCode}>
          <ExamplePanelGroupMultiStep />
        </CodeExample>
        <CodeExample
          title='Panel Group: Simple'
          description={description.panelGroupSimple}
          markup={ExamplePanelGroupSimpleCode}>
          <ExamplePanelGroupSimple />
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
