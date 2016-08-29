import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from '../Icon'

class InlineEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isEditing: false
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
  }

  state = {
    isEditing: this.props.isEditing,
    value: this.props.value
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ isEditing: nextProps.isEditing }, () => {
        if (nextProps.isEditing) {
          this.selectElementContents(this._textValue)
        }
    })
  }

  componentDidMount = () => {
    this.handleBlankValue()

    const saveEvent = this.handleSave
    this._textValue.addEventListener("keypress", (event) => {
        if (event.charCode === 13) {
          event.preventDefault()
          saveEvent()
        }
    });
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.isEditing !== nextState.isEditing
  }

  handleSave = () => {
    this.cleanupText()

    this.setState({ isEditing: false, value: this._textValue.innerHTML }, () => {
      this.handleBlankValue()
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(this.props.name, this.state.value)
      }
    })
  }

  handleCancel = () => {
    this.setState({ isEditing: false }, () => {
      this.handleBlankValue()
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback()
      }
    })
  }

  showButtons = () => {
    this._textValue.style.width = this._textValue.offsetWidth + 'px'
    this.setState({ isEditing: true }, () => {
      this.selectElementContents(this._textValue)
    })
  }

  getSpan = () => {
    if (this.state.isEditing) {
      return <span id='span_id' contentEditable className={style['inline-text-wrapper']} dangerouslySetInnerHTML={{__html: this.state.value}} ref={(c) => this._textValue = c} />
    }

    return <span id='span_id' onClick={this.showButtons} className={style['inline-text-wrapper-hover']} ref={(c) => this._textValue = c} >{this.state.value}</span>
  }

  selectElementContents = (element) => {
    const range = document.createRange()
    range.selectNodeContents(element)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)
  }

  handleBlankValue = () => {
    if (this._textValue.innerHTML.replace(/\s/g, '') === '') {
      this._textValue.innerHTML = 'Click to edit'
    }
  }

  cleanupText = () => {
    // Removes '&nbsp;' and '<br>' from text value if added on accident
    this._textValue.style.width = this._textValue.offsetWidth + 'px'
    this._textValue.innerHTML = this._textValue.innerHTML.replace(/&nbsp;/g,'');
    this._textValue.innerHTML = this._textValue.innerHTML.replace(/<br>/g,'');
  }

  render() {
    const cx = classNames.bind(style)
    const inlineEditClass = cx(style['inline-edit-wrapper'], this.props.optClass)

    return (
      <div className={inlineEditClass}>
        {this.getSpan()}
        {this.state.isEditing
          ? <div className={style['inline-button-wrapper']}>
              <Icon name='icon-check-2-1' onClick={this.handleSave} className={style['save-button']}>Save</Icon>
              <Icon name='icon-delete-1-1' onClick={this.handleCancel} className={style['cancel-button']}>Cancel</Icon>
            </div>
          : null
        }
      </div>
    )
  }
}

export default InlineEdit
