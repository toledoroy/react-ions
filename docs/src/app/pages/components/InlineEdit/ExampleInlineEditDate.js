import React from 'react'
import InlineEdit from 'react-ions/lib/components/InlineEdit'
import Button from 'react-ions/lib/components/Button'
import style from './styles'

class ExampleInlineEditDate extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: '2019-11-30',
    loading: false,
    readonly: false,
    error: ''
  }

  setErrorState = () => {
    this.setState({ error: this.state.error === '' ? 'This is an error.' : '' })
  }

  makeReadonly = () => {
    this.setState({ readonly: !this.state.readonly })
  }

  changeCallback = event => {
    console.log('Selected:', event.target.value)
    this.setState({ value: event.target.value, loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render = () => {
    const dateConfig = {
      min: { month: '0', day: '1', year: '1985'},
      max: { month: '+0', day: '+0', year: '+10' }
    }

    return (
      <div>
        <InlineEdit name='test' value={this.state.value} label='Date' icon='md-date' changeCallback={this.changeCallback} type='date' dateConfig={dateConfig} loading={this.state.loading} error={this.state.error} readonly={this.state.readonly} />
        <div className={style['button-callback']}>
          <Button onClick={this.setErrorState}>{this.state.error === '' ? 'Mock Error' : 'Clear Error'}</Button>
          <Button onClick={this.makeReadonly}>{this.state.readonly ? 'Make Editable' : 'Make Readonly'}</Button>
        </div>
      </div>
    )
  }
}

export default ExampleInlineEditDate
