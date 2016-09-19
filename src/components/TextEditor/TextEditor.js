import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Quill from 'quill'
import 'style-loader!css-loader!quill/dist/quill.core.css'

/**
 * The TextEditor component.
 */
class TextEditor extends React.Component {
  constructor(props) {
    super(props)
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

  componentDidMount = () => {
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
    ]
    const options = {
      debug: 'info',
      modules: {
        toolbar: true
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    }
    new Quill(this._editor, options)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = (event) => {
    event.persist()
    console.log(event)
  }

  handleFocus = (event) => {
  }

  handleBlur = (event) => {
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
