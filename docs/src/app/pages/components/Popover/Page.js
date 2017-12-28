import React from 'react'
import PropsList from 'private/modules/PropsList'
import docs from '!!docgen!react-ions/src/components/Popover/Popover'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExamplePopover from './ExamplePopover'
import examplePopoverCode from '!raw!./ExamplePopover'

const description = {
  popoverDefault: 'This is the `popover component` as it appears by default.'
}

const PopoverPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Popover'
          description={description.popoverDefault}
          markup={examplePopoverCode}>
          <ExamplePopover />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Props</h3>
        <PropsList list={docs[0].props} />
      </div>
    </div>
  </div>
)

export default PopoverPage
