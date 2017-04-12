import React from 'react'
import Avatar from 'react-ions/lib/Avatar'
import Button from 'react-ions/lib/Button'
import style from './style.scss'

class ExampleAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    letters: 'cf',
    size: '100'
  }

  randomize = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz'
    let letters = ''
    for (let i=0; i<2; i++)
      letters += possible.charAt(Math.floor(Math.random()*possible.length))

    const size = (Math.floor(Math.random()*200)+100).toString()
    const letterBackgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)

    this.setState({ letters, size, letterBackgroundColor })
  }

  render = () => {
    return(
      <div>
        <Avatar letters={this.state.letters} size={this.state.size} letterBackgroundColor={this.state.letterBackgroundColor} />
        <div className={style['avatar-controls']}>
          <Button onClick={this.randomize}>Random letters/size/color</Button>
        </div>
      </div>
    )
  }
}

export default ExampleAvatar
