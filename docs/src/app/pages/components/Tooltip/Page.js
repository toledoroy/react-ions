import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-conventions/lib/Tooltip/Tooltip'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleTooltipDefault from './ExampleTooltipDefault'
import exampleTooltipDefaultCode from '!raw!./ExampleTooltipDefault'
// import ExampleTooltipActions from './ExampleTooltipActions'
// import exampleTooltipActionsCode from '!raw!./ExampleTooltipActions'
// import ExampleTooltipSmall from './ExampleTooltipSmall'
// import exampleTooltipSmallCode from '!raw!./ExampleTooltipSmall'
// import ExampleTooltipLarge from './ExampleTooltipLarge'
// import exampleTooltipLargeCode from '!raw!./ExampleTooltipLarge'

const description = {
  tooltipDefault: 'This is the `tooltip component` as it appears by default.'
  // tooltipActions: 'This is the `tooltip component` with actions.',
  // tooltipSmall: 'This is the small `tooltip component`.',
  // tooltipLarge: 'This is the large `tooltip component`.'
};

const TooltipPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>Examples</h3>
        <CodeExample
          title='Default Tooltip'
          description={description.tooltipDefault}
          markup={exampleTooltipDefaultCode}>
          <ExampleTooltipDefault />
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
