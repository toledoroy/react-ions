import React from 'react'
import shallowCompare from 'react-addons-shallow-compare'
import Dropdown from '../Dropdown'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import '../../styles/global/quill.scss'

const style = prefix(rawStyle)

class MergeTags extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The text editor.
     */
    textEditor: React.PropTypes.object,
    /**
     * Merge tags to display.
     */
    mergeTags: React.PropTypes.array.isRequired
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState)
  }

  insertTag = (tag) => {
    // Get selection and focus editor if necessary
    const range = this.props.textEditor.getSelection(true)
    if (range.length > 0) {
      // Remove selected text
      this.props.textEditor.deleteText(range.index, range.length)
    }

    // Insert the tag
    this.props.textEditor.insertText(range.index, tag)

    // Set the cursor to the new position
    this.props.textEditor.setSelection(range.index + tag.length)
  }

  render = () => {
    const mergeTagsTrigger = <span className='ql-picker-label'>Merge Tags <svg viewbox='0 0 18 18'> <polygon className='ql-stroke' points='7 11 9 13 11 11 7 11'></polygon> <polygon className='ql-stroke' points='7 7 9 5 11 7 7 7'></polygon> </svg></span>
    const mergeTags = this.props.mergeTags.map((option) => {
      return { name: option.name, callback: this.insertTag.bind(this, option.tag) }
    })

    return (
      <span className='ql-formats'>
        <span className={style['merge-tags']}>
          <Dropdown trigger={mergeTagsTrigger} listItems={mergeTags} optClass='ql-picker' />
        </span>
      </span>
    )
  }
}

export default MergeTags
