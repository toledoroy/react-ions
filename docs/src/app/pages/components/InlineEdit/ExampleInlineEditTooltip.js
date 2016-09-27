import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Button from 'react-conventions/lib/Button'
import style from './styles'

class ExampleInlineEditTooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    value: 'Example value',
    tooltipPlacement: 'right'
  }

  changeCallback = (event) => {
    this.setState({ value: event.target.value })
  }

  setTooltipPlacement = (placement) => {
    this.setState({ tooltipPlacement: placement })
  }

  render = () => {
    return (
      <div>
        <InlineEdit name='test' value={this.state.value} tooltipClass={style['tooltip']} label='Email' icon='icon-mail-1' tooltipText={`The value is: '${this.state.value}'`} tooltipPlacement={this.state.tooltipPlacement} changeCallback={this.changeCallback}/>
        <div className={style['button-callback']}>
          <p>Tooltip placement</p>
          <Button onClick={this.setTooltipPlacement.bind(this, 'top')}>Top</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'right')}>Right</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'bottom')}>Bottom</Button>
          <Button onClick={this.setTooltipPlacement.bind(this, 'left')}>Left</Button>
        </div>
      </div>
    )
  }
}

export default ExampleInlineEditTooltip
