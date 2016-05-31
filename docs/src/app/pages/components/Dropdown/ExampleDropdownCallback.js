import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import styles from './styles.scss'

class ExampleDropdownCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpened: false
  }

  handleOpen = () => {
    this.setState({isOpened: true});
  }

  render() {
    return (
      <div>
        <Dropdown trigger={<u>dropdown here</u>} isOpened={this.state.isOpened}>
          This is the contents.
        </Dropdown>
        <p className={styles['float-right']}>And here you can <a href="#" onClick={this.handleOpen}>open it remotely</a>.</p>
      </div>
    )
  }

}

export default ExampleDropdownCallback
