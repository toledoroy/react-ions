import React from 'react'
import classNames from 'classnames/bind'
import fuzzy from 'fuzzy'
import Icon from '../Icon'
import Input from '../Input'
import style from './style.scss'

class Typeahead extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * A string to display as the placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * An array of objects which will be used as the options for the select field.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * The value of the option to be selected.
     */
    value: React.PropTypes.string,
    /**
     * Which field in the option object will be used as the value of the select field.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the select field.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Whether the select field is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Optional styles to add to the select field.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func,
    /**
     * A callback for updating options when typeahead search value is changed.
     */
    searchCallback: React.PropTypes.func,
    /**
     * A loading state to be set to true when asynchronous searching is in progress.
     */
    loading: React.PropTypes.bool
  }

  state = {
    isActive: false,
    value: this.props.value || '',
    results: [],
    selected: null
  }

  componentWillMount = () => {
    this.setState({selected: this.props.display, value: this.props.value})
  }

  componentWillReceiveProps = (nextProps) => {
  }

  selectOption = (option, triggerCallback) => {
    this.setState({selected: option.original.display, value: option.original.value, isActive: false}, function() {
      if (triggerCallback && typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.state.selected.original.display,
            value: this.state.selected.original.value,
            option: option
          }
        })
      }
    })
  }

  handleChange = (event) => {
    if (event.target.value.length) {
      this.setState({isActive: true})
    } else {
      this.setState({isActive: false})
    }

    let str = {
      pre: '<b>',
      post: '</b>',
      extract: (el) => {
        return el[this.props.displayProp]
      }
    }

    let results = fuzzy.filter(event.target.value, this.props.options, str)
    this.setState({results: results})
  }

  getDynamicList = (str) => {
    return {
      __html: str
    }
  }

  render() {
    const cx = classNames.bind(style)
    const typeaheadClass = cx(style['typeahead-component'], this.props.optClass)
    const options = this.state.results.map((option, index) =>
      <li
        key={index}
        onClick={this.selectOption.bind(null, option, true)}
        dangerouslySetInnerHTML={this.getDynamicList(option.string)} />
    )
    const selectedValue = this.state.selected || ''

    return (
      <div className={typeaheadClass}>
        <Input changeCallback={this.handleChange} value={selectedValue} placeholder={this.props.placeholder} disabled={this.props.disabled} />
        {this.state.isActive
        ? <ul className={style['typeahead-list']}>
          {options}
          </ul>
        : null
        }
      </div>
    )
  }
}

export default Typeahead
