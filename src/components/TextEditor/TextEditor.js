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
    disabled: this.props.disabled,
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
    changeCallback: React.PropTypes.func
  }

  registerEventHandlers = () => {
    // On text change
    this.textEditor.on('text-change', (delta, oldDelta, source) => {
      const event = {
        target: {
          name: this.props.name,
          value: this.getHTML()
        }
      }

      if (this.props.changeCallback && event.target.value !== this.state.value) {
        this.props.changeCallback(event)
      }
    })
  }

  setContent = (value) => {
    this._editor.firstChild.innerHTML = value
  }

  componentDidMount = () => {
    // Define editor options
    const options = {
      modules: {
        toolbar: true
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
    let updatedState = {}

    if (nextProps.value !== this.state.value) {
      this.setContent(nextProps.value)
      updatedState.value = nextProps.value
    }
    if (nextProps.disabled !== this.state.disabled) {
      this.textEditor.enable(!nextProps.disabled)
      updatedState.disabled = nextProps.disabled
    }

    if (Object.keys(updatedState).length > 0) {
      this.setState(updatedState)
    }
  }

  render() {
    const cx = classNames.bind(style)
    var disabledClass = this.state.disabled ? style['editor-disabled'] : ''
    var editorClass = cx(style['editor-component'], this.props.optClass, disabledClass)

    return (
      <div className={editorClass}>
        <div ref={(c) => this._toolbar = c}></div>
        <div ref={(c) => this._editor = c}></div>
        <div className={style.overlay}></div>
      </div>
    )
  }
}

export default TextEditor
