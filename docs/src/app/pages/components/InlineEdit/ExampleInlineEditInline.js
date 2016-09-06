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
        <div className={style['inline-div-wrapper']}>
          <Icon name='icon-mail-1' height='16' fill='#9198A0' className='custom' className={style['icon-wrapper']} />
          <span className={style['label-wrapper']}>EMAIL</span>
          <InlineEdit name='test' value='test@example.com' optClass={style['opt-wrapper']}/>
        </div>
      </div>
    )
  }
}

export default ExampleInlineEditInline
