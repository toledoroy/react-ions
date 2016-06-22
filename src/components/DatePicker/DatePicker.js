import React from 'react'
import moment from 'moment'
import SelectField from '../SelectField/SelectField'
import style from './style.scss'
import classNames from 'classnames/bind'

/**
 * The DatePicker component.
 */
class DatePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    year: {
      min: 0,
      value: 0,
      max: 0,
      options: []
    },
    month: {
      min: 0,
      value: 0,
      max: 0,
      options: []
    },
    day: {
      min: 0,
      value: 0,
      max: 0,
      options: []
    }
  }

  static defaultProps = {
    min: { month: '-0', day: '-0', year: '-10'},
    max: { month: '+0', day: '+0', year: '+10'},
    format: 'YYYY-MM-DD'
  }

  static propTypes = {
    /**
     * Max date - object with month, day, year.
     */
    max: React.PropTypes.object,
    /**
     * Min date - object with month, day, year.
     */
    min: React.PropTypes.object,
    /**
     * Date string.
     */
    value: React.PropTypes.string,
    /**
     * Date format - any valid Moment.js format string.
     */
    format: React.PropTypes.string,
    /**
     * A callback function to be called when the value changes.
     */
    changeCallback: React.PropTypes.func,
    /**
     * An optional CSS class to be used for local styles
     */
    optClass: React.PropTypes.string
  }

  _initDate = (date, format) => {
    let dateObj = {
      year: {
        min: 0,
        value: 0,
        max: 0,
        options: []
      },
      month: {
        min: 0,
        value: 0,
        max: 0,
        options: []
      },
      day: {
        min: 0,
        value: 0,
        max: 0,
        options: []
      },
      value: ''
    }

    let mDate = date === undefined ? moment() : moment(date, format)

    // selected date values
    dateObj.year.value = mDate.year()
    dateObj.month.value = mDate.month()
    dateObj.day.value = mDate.date()

    dateObj.value = mDate.format(format)

    // min & max values
    dateObj.year.min = this._getMinOrMax(this.props.min, 'year')
    dateObj.year.max = this._getMinOrMax(this.props.max, 'year')
    dateObj.month.min = this._getMinOrMax(this.props.min, 'month')
    dateObj.month.max = this._getMinOrMax(this.props.max, 'month')
    dateObj.day.min = this._getMinOrMax(this.props.min, 'day')
    dateObj.day.max = this._getMinOrMax(this.props.max, 'day')

    // options
    dateObj.year.options = this._getYears(dateObj.year.min, dateObj.year.max)
    dateObj.month.options = this._getMonths(dateObj)
    dateObj.day.options = this._getDays(dateObj)

    this.setState(dateObj)
  }

  _getMinOrMax = (minOrMax, type) => {
    let momentDate
    let value
    
    if (minOrMax[type] === 'current') {
      momentDate = moment()
    } else if (minOrMax[type].indexOf('+') !== -1) {
      momentDate = moment().add(Math.abs(minOrMax[type]), type)
    } else if (minOrMax[type].indexOf('-') !== -1) {
      momentDate = moment().subtract(Math.abs(minOrMax[type]), type)
    } else {
      value = minOrMax[type]
    }

    if (momentDate) {
      switch (type) {
        case 'year':
          value = momentDate.year()
          break
        case 'month':
          value = momentDate.month()
          break
        case 'day':
          value = momentDate.date()
          break
      }
    }

    return parseInt(value)
  }

  _getYears = (min, max) => {
    let yearOptions = []

    for (var i=min; i<=max; i++) {
      yearOptions.push({value: i.toString()})
    }

    return yearOptions
  }

  _getMonths = (dateObj) => {
    let monthOptions = []
    const checkMin = dateObj.year.value === dateObj.year.min
    const checkMax = dateObj.year.value === dateObj.year.max

    let start = checkMin ? dateObj.month.min : 0
    let end = checkMax ? dateObj.month.max+1 : 12

    for (var i=start; i<end; i++) {
      monthOptions.push({value: i.toString(), display: moment(i+1, 'MM').format('MMMM')})
    }

    // if selected month is greater than max month, change it to max month
    if (checkMax && dateObj.month.value > dateObj.month.max) {
        dateObj.month.value = dateObj.month.max
    }

    // if selected month is lower than min month, change it to min month
    if (checkMin && dateObj.month.value < dateObj.month.min) {
        dateObj.month.value = dateObj.month.min
    }

    return monthOptions
  }

  _getDays = (dateObj) => {
    let dayOptions = []

    const checkMin = dateObj.year.value === dateObj.year.min && dateObj.month.value === dateObj.month.min
    const checkMax = dateObj.year.value === dateObj.year.max && dateObj.month.value === dateObj.month.max
    const daysInMonth = moment(dateObj.year.value+'-'+(dateObj.month.value+1), 'YYYY-M').daysInMonth()

    let start = checkMin ? dateObj.day.min : 1
    let end = checkMax ? dateObj.day.max : daysInMonth

    for (var i=start; i<=end; i++) {
      dayOptions.push({value: i.toString()})
    }

    // if selected day is greater than max day in a month, change it to max day in a month
    if (dateObj.day.value > daysInMonth) {
      dateObj.day.value = daysInMonth
    }

    // if selected day is greater than max day, change it to max day
    if (checkMax && dateObj.day.value > dateObj.day.max) {
        dateObj.day.value = dateObj.day.max
    }

    // if selected day is lower than min day, change it to min day
    if (checkMin && dateObj.day.value < dateObj.day.min) {
        dateObj.day.value = dateObj.day.min
    }

    dateObj.value = this._getValue(dateObj)

    return dayOptions
  }

  _getValue = (state) => {
    return moment().year(state.year.value).month(state.month.value).date(state.day.value).format(this.props.format)
  }

  handleChangeYear = (event) => {
    let state = this.state
    state.year.value = parseInt(event.target.value)
    state.value = this._getValue(state)

    state.month.options = this._getMonths(state)
    state.day.options = this._getDays(state)
    this.setState({
      year: state.year,
      month: state.month,
      day: state.day,
      value: state.value
    }, function() {
      this.callback(state.value)
    })
  }

  handleChangeMonth = (event) => {
    let state = this.state
    state.month.value = parseInt(event.target.value)
    state.value = this._getValue(state)
    state.day.options = this._getDays(state)
    this.setState({
      month: state.month,
      day: state.day,
      value: state.value
    }, function() {
      this.callback(state.value)
    })
  }

  handleChangeDay = (event) => {
    let state = this.state
    state.day.value = parseInt(event.target.value)
    state.value = this._getValue(state)
    this.setState({
      day: state.day,
      value: state.value
    }, function() {
      this.callback(state.value)
    })
  }

  callback = (value) => {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback({
        target: {
          value: value
        }
      })
    }
  }

  componentWillMount = () => {
    this._initDate(this.props.value, this.props.format)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.value !== this.props.value) {
      this._initDate(nextProps.value, this.props.format)
    }
  }

  render() {
    const cx = classNames.bind(style)
    const componentClass = cx(style['datepicker-component'], this.props.optClass)

    return (
      <div className={componentClass}>
        <SelectField
          options={this.state.month.options}
          valueProp='value'
          displayProp='display'
          value={this.state.month.value.toString()}
          changeCallback={this.handleChangeMonth}
        />
        <SelectField
          options={this.state.day.options}
          valueProp='value'
          displayProp='value'
          value={this.state.day.value.toString()}
          changeCallback={this.handleChangeDay}
        />
        <SelectField
          options={this.state.year.options}
          valueProp='value'
          displayProp='value'
          value={this.state.year.value.toString()}
          changeCallback={this.handleChangeYear}
        />
      </div>
    )
  }
}

export default DatePicker
