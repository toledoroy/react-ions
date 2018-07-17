import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import styles from './styles'

class ExampleInlineEditCopy extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    copySrc: 'Copy source',
    copySrcLoading: false,
    copyDest: 'Copy destination',
    copyDestLoading: false
  }

  update = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [`${event.target.name}Loading`]: true
    })

    setTimeout(() => {
      this.setState({
        [`${event.target.name}Loading`]: false
      })
    }, 1000)
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='copySrc' value={this.state.copySrc} changeCallback={this.update} loading={this.state.copySrcLoading} copyToClipboard />
        <br />
        <InlineEdit name='copyDest' value={this.state.copyDest} changeCallback={this.update} loading={this.state.copyDestLoading} copyToClipboard={this.state.copySrc} />
      </div>
    )
  }
}

export default ExampleInlineEditCopy
