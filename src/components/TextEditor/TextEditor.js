import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Quill from 'quill'
import shallowCompare from 'react-addons-shallow-compare'
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
    changeCallback: React.PropTypes.func
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
    this.textEditor.enable(!nextProps.disabled)

    if (nextProps.value !== this.state.value) {
      this.setContent(nextProps.value)
      this.setState({ value: nextProps.value })
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const cx = classNames.bind(style)
    var disabledClass = this.props.disabled ? style['editor-disabled'] : ''
    var editorClass = cx(style['editor-component'], this.props.optClass, disabledClass)

    return (
      <div className={editorClass}>
        <div ref={(c) => this._editor = c}></div>
        <div className={style.overlay}></div>
      </div>
    )
  }
}

export default TextEditor
