import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Button from 'react-conventions/lib/Button'
import style from './styles'

class ExampleInlineEditSelect extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: 'item_2',
    loading: false,
    readonly: false,
    error: ''
  }

  setErrorState = () => {
    this.setState({ error: this.state.error === '' ? 'This is an error.' : '' })
  }

  makeReadonly = () => {
    this.setState({ readonly: this.state.readonly ? false : true })
  }

  changeCallback = (event) => {
    console.log('Selected:', event.target.value)
    this.setState({ value: event.target.value, loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render = () => {
    const options = [
      { label: 'Item 1', value: 'item_1' },
      { label: 'Item 2', value: 'item_2' },
      { label: 'Item 3', value: 'item_3' }
    ]

    return (
      <div>
        <InlineEdit name='test' value={this.state.value} label='Email' icon='icon-mail-1' changeCallback={this.changeCallback} type='select' loading={this.state.loading} error={this.state.error} readonly={this.state.readonly} options={options} />
        <div className={style['button-callback']}>
          <Button onClick={this.setErrorState}>{this.state.error === '' ? 'Mock Error' : 'Clear Error'}</Button>
          <Button onClick={this.makeReadonly}>{this.state.readonly ? 'Make Editable' : 'Make Readonly'}</Button>
        </div>
      </div>
    )
  }
}

export default ExampleInlineEditSelect
