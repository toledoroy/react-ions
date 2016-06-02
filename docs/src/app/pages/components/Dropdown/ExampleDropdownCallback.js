import React from 'react'
import Dropdown from 'react-conventions/lib/Dropdown'
import Button from 'react-conventions/lib/Button'
import Badge from 'react-conventions/lib/Badge'
import styles from './styles'

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
          <div className={styles.wrapper}>
            <Badge icon='icon-check-1-1' theme='success' /><span>Dropdown content here.</span>
          </div>
        </Dropdown>
        <p className={styles['float-right']}>And here you can <a href="#" onClick={this.handleOpen}>open it remotely</a>.</p>
      </div>
    )
  }

}

export default ExampleDropdownCallback
