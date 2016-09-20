import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Quill from 'quill'
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
  }

  static defaultProps = {
  }

  static propTypes = {
    /**
     * Whether the text editor is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value of the text editor.
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
    changeCallback: React.PropTypes.func
  }

  registerEventHandlers = () => {
    // Text change
    this.textEditor.on('text-change', (delta, oldDelta, source) => {
      const event = {
        target: {
          name: this.props.name,
          value: this.getHTML()
        }
      }

      if (this.props.changeCallback) {
        this.props.changeCallback(event)
      }
    })
  }

  componentDidMount = () => {
    const options = {
      modules: {
        toolbar: true
      },
      placeholder: this.props.placeholder || '',
      theme: 'snow'
    }

    this.textEditor = new Quill(this._editor, options)

    this.registerEventHandlers()
  }

  render() {
    const {
      value,
      optClass,
      ...other
    } = this.props

    const cx = classNames.bind(style)
    var disabledClass = this.props.disabled ? style['editor-disabled'] : ''
    var editorClass = cx(style['editor-component'], this.props.optClass, disabledClass)

    return (
      <div className={editorClass}>
        <div className={style.toolbar} ref={(c) => this._toolbar = c}></div>
        <div className={style.editor} ref={(c) => this._editor = c}></div>
      </div>
    )
  }
}

export default TextEditor
