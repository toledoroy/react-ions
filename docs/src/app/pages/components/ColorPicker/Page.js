import React from 'react'
import ExampleColorPicker from './ExampleColorPicker'
import styles from 'private/css/content'


const ColorPickerPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <ExampleColorPicker />
      </div>
    </div>
  </div>
)

export default ColorPickerPage