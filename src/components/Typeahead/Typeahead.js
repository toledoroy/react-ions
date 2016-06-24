import React from 'react'
import classNames from 'classnames/bind'
import enhanceWithClickOutside from 'react-click-outside'
import fuzzy from 'fuzzy'
import Loader from 'react-loader'
import Input from '../Input'
import style from './style.scss'

export class Typeahead extends React.Component {
  constructor(props) {
    super(props)
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
    selected: null,
    searchStr: ''
  }

  componentWillMount = () => {
    if (typeof this.state.value !== 'undefined' && this.state.value !== '' && this.getIndex(this.state.value, this.props.options) > -1) {
      this.selectItem(this.state.value, this.props.options)
    }
    else {
      this.setState({selected: ''})
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value && nextProps.value !== this.state.value && this.getIndex(nextProps.value, nextProps.options) > -1) {
      this.setState({ value: nextProps.value }, () => {
        this.selectItem(nextProps.value, nextProps.options)
      })
    }
    else {
      this.setState({selected: '', value: '', searchStr: ''})
    }
  }

  selectOption = (option) => {
    let normalizedOption = option.original ? option.original : option

    this.setState({selected: normalizedOption, searchStr: normalizedOption[this.props.valueProp], value: normalizedOption[this.props.valueProp], isActive: false}, () => {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback({
          target: {
            name: this.props.name,
            value: normalizedOption[this.props.valueProp],
            option: normalizedOption
          }
        })
      }
    })
  }

  selectItem = (value, options) => {
    let index = this.getIndex(value, options)
    if (index >= 0) {
      this.selectOption(options[index], false)
    }
  }

  getIndex = (value, options) => {
    let optionIndex = -1
    options.map((option, index) => {
      if (option[this.props.valueProp] === value) {
        optionIndex = index
      }
    })

    return optionIndex
  }

  handleChange = (event) => {
    if (event.target.value.length) {
      this.setState({searchStr: event.target.value})
      if (typeof this.props.searchCallback === 'function') {
        this.props.searchCallback(event.target.value).then((options) => {
          this.updateResults(event, options)
        })
      } else {
        this.updateResults(event, this.props.options)
      }
    } else {
      this.setState({isActive: false})
    }
  }

  handleClickOutside = () => {
    this.setState({isActive: false})
  }

  updateResults = (event, options) => {
    this.setState({isActive: true})

    let str = {
      pre: '<b>',
      post: '</b>',
      extract: (el) => {
        return el[this.props.displayProp]
      }
    }

    let results = fuzzy.filter(event.target.value, options, str)
    this.setState({results: results})
  }

  getDynamicList = (str) => {
    return {
      __html: str
    }
  }

  render() {
    const cx = classNames.bind(style)
    const loaderClass = this.props.loading ? 'loading' : null
    const typeaheadClass = cx(style['typeahead-component'], loaderClass, this.props.optClass)

    const spinnerOptions = {
      color: '#9198A0',
      length: 4,
      lines: 10,
      radius: 5,
      left: 'calc(100% - 21px)',
      width: 3
    }

    const options = this.state.results.map((option, index) =>
      <li
        key={index}
        onClick={this.selectOption.bind(null, option, true)}
        dangerouslySetInnerHTML={this.getDynamicList(option.string)} />
    )

    return (
      <div className={typeaheadClass}>
        <Input changeCallback={this.handleChange} value={this.state.searchStr} placeholder={this.props.placeholder} disabled={this.props.disabled} />
        { this.props.loading ? <Loader loaded={false} options={spinnerOptions} /> : null }

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

export default enhanceWithClickOutside(Typeahead)
