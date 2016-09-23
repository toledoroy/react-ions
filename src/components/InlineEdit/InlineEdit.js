import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'
import Spinner from '../Spinner'

class InlineEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isEditing: false,
    placeholder: 'Click to edit',
    loading: false,
    readonly: false,
    error: ''
  }

  static propTypes = {
    /**
     * Name of the input.
     */
    name: React.PropTypes.string,
    /**
     * A callback function to be called when save is clicked.
     */
    changeCallback: React.PropTypes.func,
    /**
     * Value of the input.
     */
    value: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
      React.PropTypes.array
    ]),
    /**
     * Boolean used to show/hide the input vs formatted display.
     */
    isEditing: React.PropTypes.bool,
    /**
     * Optional styles to add to the inline-edit.
     */
    optClass: React.PropTypes.string,
    /**
     * Optional placeholder string for empty submission.
     */
    placeholder: React.PropTypes.string,
    /**
     * Whether the inline-edit is readonly
     */
    readonly: React.PropTypes.bool,
    /**
     * Boolean used to show/hide the loader
     */
    loading: React.PropTypes.bool,
    /**
     * Error to display under the field
     */
    error: React.PropTypes.string
  }

  state = {
    isEditing: this.props.isEditing,
    value: this.props.value,
    loading: this.props.loading,
    error: this.props.error
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isEditing) {
      this.showButtons()
    }
    if (nextProps.loading !== this.state.loading || nextProps.error !== this.state.error) {
      this.setState({ loading: nextProps.loading, error: nextProps.error })
    }
  }

  componentDidMount = () => {
    this.handleBlankValue()
    this.attachKeyListeners()
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.isEditing !== nextState.isEditing || this.state.loading !== nextState.loading || this.state.error !== nextState.error
  }

  handleSave = () => {
    this.cleanupText()

    this.setState({ isEditing: false, value: this._textValue.innerHTML }, () => {
      this.handleBlankValue()
      this._textValue.blur()
      this._textValue.scrollLeft = 0

      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.props.name, this.state.value)
      }
    })
  }

  handleCancel = () => {
    this.setState({ isEditing: false }, () => {
      this.handleBlankValue()
      this._textValue.blur()
      this._textValue.scrollLeft = 0

      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback()
      }
    })
  }

  showButtons = () => {
    if (!this.props.readonly) {
      this.setState({ isEditing: true }, () => {
        this.selectElementContents(this._textValue)
      })
    }
  }

  getSpan = () => {
    const readonlyIcon = this.props.readonly ? <div className={style['readonly-icon']}><Icon name='icon-delete-2-2' height='18' width='18' /></div> : null

    if (this.state.isEditing) {
      return <span id='span_id' contentEditable className={style['inline-text-wrapper']} dangerouslySetInnerHTML={{__html: this.state.value}} ref={(c) => this._textValue = c} />
    }

    return <span id='span_id' onClick={this.showButtons} className={style['inline-text-wrapper-hover']} ref={(c) => this._textValue = c} >{this.state.value}{readonlyIcon}</span>
  }

  selectElementContents = (element) => {
    const range = document.createRange()
    range.selectNodeContents(element)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
    element.focus()
  }

  handleBlankValue = () => {
    if (this._textValue.innerHTML.replace(/\s/g, '') === '') {
      this._textValue.innerHTML = this.props.placeholder
    }
  }

  attachKeyListeners = () => {
    const saveEvent = this.handleSave
    this._textValue.addEventListener("keypress", (event) => {
      // Grabs the character code, even in FireFox
      const charCode = event.keyCode ? event.keyCode : event.which
      if (charCode === 13) {
        event.preventDefault()
        saveEvent()
      }
    });

    const cancelEvent = this.handleCancel
    this._textValue.addEventListener("keyup", (event) => {
      // Grabs the character code, even in FireFox
      const charCode = event.keyCode ? event.keyCode : event.which
      if (charCode === 27) {
        event.preventDefault()
        cancelEvent()
      }
    });
  }

  cleanupText = () => {
    // Removes '&nbsp;' and '<br>' from text value if added on accident
    this._textValue.innerHTML = this._textValue.innerHTML.replace(/&nbsp;/g,'');
    this._textValue.innerHTML = this._textValue.innerHTML.replace(/<br>/g,'');
  }

  handleCopy = () => {
    this.setState({copied: true})
  }

  render() {
    const cx = classNames.bind(style)
    const readonlyClass = this.props.readonly ? 'readonly' : ''
    const errorClass = this.props.error ? 'error' : ''
    const inlineEditClass = cx(style['inline-edit-wrapper'], this.props.optClass, readonlyClass, errorClass)

    return (
      <div className={inlineEditClass}>
        <div className={style['inline-text-overflow-wrapper']}>
          {this.getSpan()}
          {this.state.isEditing
            ? <div className={style['inline-button-wrapper']}>
                <Icon name='icon-check-2-1' onClick={this.handleSave} height='20' width='20' className={style['save-button']}>Save</Icon>
                <Icon name='icon-delete-1-1' onClick={this.handleCancel} height='20' width='20' className={style['cancel-button']}>Cancel</Icon>
              </div>
            : null
          }
          <div className={style['loader-wrapper']}>
            <Spinner loading={!this.state.isEditing && this.state.loading} optClass={style['spinner']} type='spinner-bounce' color='#9198a0' />
          </div>
        </div>
        {this.state.error && this.state.error !== ''
          ? <div className={style['error-text']}>{this.state.error}</div>
          : null
        }
        <CopyToClipboard text={this.state.value} onCopy={this.handleCopy}>
          <Icon name='icon-clipboard-1' height='20' width='20' />
        </CopyToClipboard>
      </div>
    )
  }
}

export default InlineEdit
