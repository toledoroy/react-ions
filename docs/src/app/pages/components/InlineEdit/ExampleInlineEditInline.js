import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Icon from 'react-conventions/lib/Icon'
import style from './styles'

class ExampleInlineEditInline extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <InlineEdit name='test' value='test@example.com' optClass={style['opt-wrapper']} label='Email' icon='icon-mail-1' />
      </div>
    )
  }
}

export default ExampleInlineEditInline
