import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Tooltip/Tooltip'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTooltipDefault from './ExampleTooltipDefault'
import exampleTooltipDefaultCode from '!raw!./ExampleTooltipDefault'
import ExampleTooltipBody from './ExampleTooltipBody'
import exampleTooltipBodyCode from '!raw!./ExampleTooltipBody'
import ExampleTooltipVisible from './ExampleTooltipVisible'
import exampleTooltipVisibleCode from '!raw!./ExampleTooltipVisible'

const description = {
  tooltipDefault: 'This is the `tooltip component` as it appears by default.',
  tooltipBody: 'This is the `tooltip component` that gets appended to the document body.',
  tooltipVisible: 'This is the `tooltip component` that has visibility by default.'
};

const TooltipPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Tooltip'
          description={description.tooltipDefault}
          markup={exampleTooltipDefaultCode}>
          <ExampleTooltipDefault />
        </CodeExample>
        <CodeExample
          title='Tooltip Appended To Body'
          description={description.tooltipBody}
          markup={exampleTooltipBodyCode}>
          <ExampleTooltipBody />
        </CodeExample>
        <CodeExample
          title='Tooltip Visible by default'
          description={description.tooltipVisible}
          markup={exampleTooltipVisibleCode}>
          <ExampleTooltipVisible />
        </CodeExample>
        <div className={styles.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  </div>
)

export default TooltipPage
