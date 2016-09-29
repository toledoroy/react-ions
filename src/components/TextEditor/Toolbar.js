import React from 'react'
import MergeTags from './MergeTags'
import style from './style.scss'
import '../../styles/global/quill.scss'

/**
 * The Toolbar for the TextEditor component.
 */
class Toolbar extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The text editor.
     */
    textEditor: React.PropTypes.object,
    /**
     * Merge tags to display in the toolbar.
     */
    mergeTags: React.PropTypes.array,
    /**
     * A callback to be called when the component mounts.
     */
    onMount: React.PropTypes.func
  }

  componentDidMount = () => {
    this.props.onMount(this._toolbar)
  }

  renderMergeTags = () => {
    return this.props.mergeTags ? <MergeTags {...this.props} /> : null
  }

  render = () => {
    return (
      <div ref={(c) => this._toolbar = c}>
        <span className='ql-formats'>
          <select className='ql-font'></select>
        </span>
        <span className='ql-formats'>
          <select className='ql-header'>
            <option value='1'></option>
            <option value='2'></option>
            <option value='3'></option>
            <option value='4'></option>
            <option value='5'></option>
            <option value='6'></option>
            <option></option>
          </select>
        </span>
        <span className='ql-formats'>
          <select className='ql-align'></select>
          <button className='ql-bold'></button>
          <button className='ql-italic'></button>
          <button className='ql-strike'></button>
          <button className='ql-underline'></button>
        </span>
        <span className='ql-formats'>
          <select className='ql-color'></select>
          <select className='ql-background'></select>
        </span>
        <span className='ql-formats'>
          <button className='ql-list' value='ordered'></button>
          <button className='ql-list' value='bullet'></button>
        </span>
        <span className='ql-formats'>
          <button className='ql-link'></button>
          <button className='ql-image'></button>
          <button className='ql-clean'></button>
        </span>
        { this.renderMergeTags() }
      </div>
    )
  }
}

export default Toolbar
