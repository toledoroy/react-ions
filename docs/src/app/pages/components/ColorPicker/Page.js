import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import ExampleColorPickerDefault from './ExampleColorPickerDefault'
import exampleColorPickerDefaultCode from '!raw!./ExampleColorPickerDefault'
import ExampleColorPickerSelected from './ExampleColorPickerSelected'
import exampleColorPickerSelectedCode from '!raw!./ExampleColorPickerSelected'
import ExampleColorPickerCallback from './ExampleColorPickerCallback'
import exampleColorPickerCallbackCode from '!raw!./ExampleColorPickerCallback'

import styles from 'private/css/content'

const description = {
  default: 'This is the default `ColorPicker component`.',
  selected: 'This is the `ColorPicker component` with selected color.',
  callback: 'This is the `ColorPicker component` with selected color.'
}

const ColorPickerPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Example Default Color Picker'
          description={description.default}
          markup={exampleColorPickerDefaultCode}>
          <ExampleColorPickerDefault />
        </CodeExample>
        <CodeExample
          title='Example Color Picker with Selected Color'
          description={description.selected}
          markup={exampleColorPickerSelectedCode}>
          <ExampleColorPickerSelected />
        </CodeExample>
        <CodeExample
          title='Example Color Picker with Callback'
          description={description.selected}
          markup={exampleColorPickerCallbackCode}>
          <ExampleColorPickerCallback />
        </CodeExample>
      </div>
    </div>
  </div>
)

export default ColorPickerPage