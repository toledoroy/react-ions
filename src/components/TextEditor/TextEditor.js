import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Quill from 'quill'
import shallowCompare from 'react-addons-shallow-compare'
import Dropdown from 'react-conventions/lib/Dropdown'
import '../../styles/global/quill.scss'

/**
 * The TextEditor component.
 */
class TextEditor extends React.Component {
  constructor(props) {
    super(props)

    this.textEditor = false

    this.getHTML = () => {
      if (this._editor) {
        return this._editor.firstChild.innerHTML
      }
    }
  }

  state = {
    value: this.props.value
  }

  static defaultProps = {
    disabled: false,
    value: ''
  }

  static propTypes = {
    /**
     * Whether the text editor is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value of the text editor (HTML).
     */
    value: React.PropTypes.string,
    /**
     * Optional placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * Name of the text editor.
     */
    name: React.PropTypes.string,
    /**
     * Optional styles to add to the text editor.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the text editor changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Merge tags to display in the toolbar.
     */
    mergeTags: React.PropTypes.array
  }

  registerEventHandlers = () => {
    // On text change
    this.textEditor.on('text-change', (delta, oldDelta, source) => {
      const value = this.getHTML()

      if (value !== this.state.value) {
        this.handleChange(value)
      }
    })
  }

  handleChange = (value) => {
    const event = {
      target: {
        name: this.props.name,
        value: value
      }
    }

    if (this.props.changeCallback) {
      this.props.changeCallback(event)
    }
  }

  setContent = (value) => {
    this._editor.firstChild.innerHTML = value
  }

  componentDidMount = () => {
    // Define toolbar options
    const toolbarOptions = {
      container: [
        [{ 'font': [] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'align': [] }, 'bold', 'italic', 'strike', 'underline'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['link', 'image', 'clean']
      ]
    }
    // Define editor options
    const options = {
      modules: {
        toolbar: this._toolbar
      },
      placeholder: this.props.placeholder || '',
      theme: 'snow'
    }

    // Initialize the editor
    this.textEditor = new Quill(this._editor, options)

    // Set the content
    if (this.props.value) {
      this.setContent(this.props.value)
    }

    // Disable the editor
    if (this.props.disabled) {
      this.textEditor.disable()
    }

    // Register event handlers
    this.registerEventHandlers()
  }

  componentWillReceiveProps = (nextProps) => {
    this.textEditor.enable(!nextProps.disabled)

    if (nextProps.value !== this.state.value) {
      this.setContent(nextProps.value)
      this.setState({ value: nextProps.value })
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState)
  }

  insertTag = (tag) => {
    // Get selection and focus editor if necessary
    const range = this.textEditor.getSelection(true)
    if (range.length > 0) {
      // Remove selected text
      this.textEditor.deleteText(range.index, range.length)
    }

    // Insert the tag
    this.textEditor.insertText(range.index, tag)

    // Set the cursor to the new position
    this.textEditor.setSelection(range.index + tag.length)
  }

  render = () => {
    const cx = classNames.bind(style)
    const disabledClass = this.props.disabled ? style['editor-disabled'] : ''
    const editorClass = cx(style['editor-component'], this.props.optClass, disabledClass)
    const mergeTagsTrigger = <span className='ql-picker-label'>Merge Tags <svg viewbox='0 0 18 18'> <polygon className='ql-stroke' points='7 11 9 13 11 11 7 11'></polygon> <polygon className='ql-stroke' points='7 7 9 5 11 7 7 7'></polygon> </svg></span>
    let mergeTags = []

    if (this.props.mergeTags) {
      mergeTags = this.props.mergeTags.map((option) => {
        return { name: option.name, callback: this.insertTag.bind(this, option.tag) }
      })
    }

    return (
      <div className={editorClass}>
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
          {
            this.props.mergeTags
            ? <span className='ql-formats'>
                <span className={style['merge-tags']}>
                  <Dropdown trigger={mergeTagsTrigger} listItems={mergeTags} optClass='ql-picker' />
                </span>
              </span>
            : null
          }
        </div>
        <div ref={(c) => this._editor = c}></div>
        <div className={style.overlay}></div>
      </div>
    )
  }
}

export default TextEditor
