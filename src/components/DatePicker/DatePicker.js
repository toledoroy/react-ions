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
      currentMin: 0,
      value: 0,
      max: 0,
      currentMax: 0,
      options: []
    },
    day: {
      min: 0,
      currentMin: 0,
      value: 0,
      max: 0,
      currentMax: 0,
      options: []
    }
  }

  static defaultProps = {
    //max: { month: '+0', day: '+0', year: '+10'},
    max: { month: '7', day: '15', year: '2017'},
    //max: { month: 'current', day: 'current', year: 'current'},
    min: { month: '-3', day: '-0', year: '-10'},
    //min: { month: '10', day: '5', year: '2011'},
    //min: { month: 'current', day: 'current', year: 'current'},
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
    changeCallback: React.PropTypes.func
  }

  _initDate = (date, format) => {
    console.log('_initDate: ')
    console.log(date)
    console.log(format)

    let dateObj = {
      year: {
        min: 0,
        value: 0,
        max: 0,
        options: []
      },
      month: {
        min: 0,
        currentMin: 0,
        value: 0,
        max: 0,
        currentMax: 0,
        options: []
      },
      day: {
        min: 0,
        currentMin: 0,
        value: 0,
        max: 0,
        currentMax: 0,
        options: []
      },
      value: ''
    }

    let mDate = date === undefined ? moment() : moment(date, format)
    console.log(mDate.format(format))

    dateObj.year.value = mDate.year()
    dateObj.month.value = mDate.month()
    dateObj.day.value = mDate.date()
    dateObj.value = mDate.format(format)
    dateObj.year.min = this._getMinOrMax(dateObj.value, this.props.min, 'year')
    dateObj.year.max = this._getMinOrMax(dateObj.value, this.props.max, 'year')
    dateObj.year.options = this._getYears(dateObj.year.min, dateObj.year.max)
    dateObj.month.min = this._getMinOrMax(dateObj.value, this.props.min, 'month')
    dateObj.month.max = this._getMinOrMax(dateObj.value, this.props.max, 'month')
    dateObj.month.options = this._getMonths(dateObj)
    dateObj.day.min = this._getMinOrMax(dateObj.value, this.props.min, 'day')
    dateObj.day.max = this._getMinOrMax(dateObj.value, this.props.max, 'day')
    dateObj.day.options = this._getDays(dateObj)

    this.setState(dateObj)

    return dateObj
  }

  _getMinOrMax = (date, minOrMax, type) => {
    let momentDate
    let value
    if (minOrMax[type] === 'current') {
      momentDate = moment(date)
    } else if (minOrMax[type].indexOf('+') !== -1) {
      momentDate = moment(date).add(Math.abs(minOrMax[type]), type)
    } else if (minOrMax[type].indexOf('-') !== -1) {
      momentDate = moment(date).subtract(Math.abs(minOrMax[type]), type)
    } else {
      value = minOrMax[type]
    }

    if (momentDate) {
      switch (type) {
        case 'year':
          value = momentDate.year()
          break;
        case 'month':
          value = momentDate.month()
          break;
        case 'day':
          value = momentDate.date()
          break;
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
    console.log('_getMonths')
    let monthOptions = []
    const checkMin = dateObj.year.value === dateObj.year.min
    const checkMax = dateObj.year.value === dateObj.year.max
    console.log(checkMin)
    console.log(checkMax)
    let start = checkMin ? dateObj.month.min : 0
    let end = checkMax ? dateObj.month.max : 12

    for (var i=start; i<end; i++) {
      monthOptions.push({value: i.toString(), display: moment(i+1, 'MM').format('MMMM')})
    }

    // if selected month is greater than max month, change it to max month
    if (checkMax) {
      if (dateObj.month.value > dateObj.month.max-1) {
        dateObj.month.value = dateObj.month.max-1
      }
    }

    // if selected month is lower than min month, change it to min month
    if (checkMin) {
      if (dateObj.month.value < dateObj.month.min) {
        dateObj.month.value = dateObj.month.min
      }
    }

    return monthOptions
  }

  _getDays = (dateObj) => {
    console.log('_getDays')
    let dayOptions = []
    const checkMin = dateObj.month.value === dateObj.month.min
    const checkMax = dateObj.month.value === dateObj.month.max
    console.log(checkMin)
    console.log(checkMax)
    console.log(dateObj.value)

    let start = checkMin ? dateObj.day.min : 1
    let end = checkMax ? dateObj.day.max : moment(dateObj.value, this.props.format).daysInMonth()
    console.log('_getDays: ' + start + ' / ' + end)
    for (var i=start; i<=end; i++) {
      dayOptions.push({value: i.toString()})
    }

    // if selected day is greater than max day, change it to max day
    if (checkMax) {
      if (dateObj.day.value > dateObj.day.max) {
        dateObj.day.value = dateObj.day.max
      }
    }

    // if selected day is lower than min day, change it to min day
    if (checkMin) {
      if (dateObj.day.value < dateObj.day.min) {
        dateObj.day.value = dateObj.day.min
      }
    }

    return dayOptions
  }

  _getValue = (state) => {
    return moment().year(state.year.value).month(state.month.value).date(state.day.value).format(this.props.format)
  }

  handleChangeYear = (event) => {
    console.log('handleChangeYear')
    console.log(event.target.value)
    console.log(this.state.year.max)
    let state = this.state
    console.log(state)
    state.year.value = parseInt(event.target.value)
    state.value = this._getValue(state)

    console.log(state.year.value)

    state.month.options = this._getMonths(state)
    state.day.options = this._getDays(state)
    console.log(state.month.options)
    this.setState({
      year: state.year,
      month: state.month,
      day: state.day
    })
  }

  handleChangeMonth = (event) => {
    console.log('handleChangeMonth')
    console.log(event.target.value)
    console.log(this.state.maxMonth-1)
    let state = this.state
    state.month.value = parseInt(event.target.value)
    state.value = this._getValue(state)
    state.day.options = this._getDays(state)
    console.log(state.month.options)
    this.setState({
      month: state.month,
      day: state.day
    })
  }

  handleChangeDay = (event) => {
    let state = this.state
    state.day.value = parseInt(event.target.value)
    this.setState({
      day: state.day
    })
  }

  componentWillMount = () => {
    console.log('componentWillMount')
    let dateObj = this._initDate(this.props.value, this.props.format)
    console.log(dateObj)
  }
  
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.year !== prevState.year ||
  //     this.state.month !== prevState.month ||
  //     this.state.day !== prevState.day) {
  //     this.setState({
  //       value: this._getValue()
  //     })
  //   }
  // }

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
