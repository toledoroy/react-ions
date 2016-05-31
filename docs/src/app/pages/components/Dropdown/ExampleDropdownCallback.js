import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import styles from './styles.scss'

const dropdown = <Dropdown trigger={<u>dropdown here</u>}>
                  This is the contents.
                 </Dropdown>

const openDropdown = function() {
  this.setState({isOpened: true});
}

const ExampleDropdownCallback = () => (
  <div>
    {dropdown}
    <p className={styles['float-right']}>And here you can <a href="#" onClick={openDropdown}>open it remotely</a>.</p>
  </div>
)

export default ExampleDropdownCallback
