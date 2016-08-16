import React from 'react'
import Avatar from 'react-conventions/lib/Avatar'
import Button from 'react-conventions/lib/Button'
import style from './style.scss'

const data = [
  {
    src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
    alt: 'Cat',
    size: '100'
  },
  {
    src: 'http://www.rebuildbydesign.org/wordpress/wp-content/uploads/2013/10/05_BIG_WEB_APPROACH.jpg',
    alt: 'City',
    size: '100'
  },
  {
    src: 'https://ambassador-api.s3.amazonaws.com/uploads/avatars/1088_2016_05_04_12_16_49.jpg',
    alt: 'Cat',
    size: '200'
  }
]

class ExampleAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    data: data[0]
  }

  setAvatar = (data) => {
    this.setState({
      data: data
    })
  }

  setSize = (size) => {
    const current = Object.assign({}, this.state.data)
    current.size = size
    this.setState({
      data: current
    })
  }

  render() {
    return(
      <div>
        <Avatar src={this.state.data.src} alt={this.state.data.alt} size={this.state.data.size} />
        <div className={style['avatar-controls']}>
          <Button onClick={this.setAvatar.bind(this, data[0])}>Avatar 1</Button>
          <Button onClick={this.setAvatar.bind(this, data[1])}>Avatar 2</Button>
          <Button onClick={this.setSize.bind(this, '200')}>Change size</Button>
        </div>
      </div>
    )
  }
}

export default ExampleAvatar
