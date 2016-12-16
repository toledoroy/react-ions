import React from 'react'
import Dropdown from 'react-ions/lib/Dropdown'
import Button from 'react-ions/lib/Button'
import Badge from 'react-ions/lib/Badge'
import styles from './styles'

const ExampleDropdownButton = () => (
  <Dropdown trigger={<Button>Dropdown</Button>}>
    <div className={styles.wrapper}>
      <Badge icon='icon-check-1-1' theme='success' /><span>Dropdown content here.</span>
    </div>
  </Dropdown>
)

export default ExampleDropdownButton
