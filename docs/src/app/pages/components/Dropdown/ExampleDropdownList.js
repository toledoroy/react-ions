import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import Badge from 'react-conventions/lib/Badge'
import styles from './styles'

const listitems = [
  {name: 'test 1'},
  {name: 'test 2'},
  {name: 'test 3'}
]


const ExampleDropdownList = () => (
  <Dropdown trigger={<Button>Dropdown</Button>} listItems={listitems} />
)

export default ExampleDropdownList
