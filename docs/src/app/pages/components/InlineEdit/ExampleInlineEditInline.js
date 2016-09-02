import React from 'react'
import InlineEdit from 'react-conventions/lib/InlineEdit'
import Icon from 'react-conventions/lib/Icon'
import styles from './styles'

class ExampleInlineEditInline extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inlineValue: 'Click to edit'
  }

  handleSave = (name, value) => {
    if (name === 'test') {
      this.setState({ inlineValue: value })
    }
  }

  render() {
    return (
      <div>
        <div className={styles['divClass']}>
          <Icon name='icon-check-circle-2' height='16' fill='#9198A0' className='custom' />
          <span>Test</span>
          <InlineEdit name='test' value={this.state.inlineValue} changeCallback={this.handleSave} optClass={styles['optClass']}/>
        </div>
        <code>The Inline Edit value is {this.state.inlineValue}.</code>
      </div>
    )
  }
}

export default ExampleInlineEditInline
