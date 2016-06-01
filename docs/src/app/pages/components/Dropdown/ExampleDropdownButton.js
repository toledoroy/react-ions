import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import Badge from 'react-conventions/lib/Badge'
import styles from './styles'

const ExampleDropdownButton = () => (
  <Dropdown trigger={<Button>Dropdown</Button>}>
    <div className={styles.wrapper}>
      <Badge icon='icon-check-1-1' theme='success' /><span>Dropdown content here.</span>
    </div>
  </Dropdown>
)

export default ExampleDropdownButton
