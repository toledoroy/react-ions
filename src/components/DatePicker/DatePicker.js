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
    day: null,
    month: null,
    year: null,
    dayOptions: [],
    monthOptions: [],
    yearOptions: [],
    minYear: null,
    maxYear: null,
    minMonth: null,
    maxMonth: null,
    minDay: null,
    maxDay: null,
    value: null
  }

  static defaultProps = {
    //max: { month: '+0', day: '+0', year: '+10'},
    max: { month: '5', day: '15', year: '2017'},
    //max: { month: 'current', day: 'current', year: 'current'},
    min: { month: '-3', day: '-0', year: '-10'},
    //min: { month: '10', day: '5', year: '2011'},
    //min: { month: 'current', day: 'current', year: 'current'},
    format: 'MM-DD-YYYY'
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

  _getDay = (date) => {
    return moment(date).date()
  }

  _getMonth = (date) => {
    return moment(date).month()
  }

  _getYear = (date) => {
    return moment(date).year()
  }

  _getDays = (date) => {
    let dayOptions = []
    const daysInMonth = moment(date).daysInMonth()

    for (var i=1; i<=daysInMonth; i++) {
      dayOptions.push({value: i.toString()})
    }
    return dayOptions
  }

  _getMonths = (checkMin, checkMax) => {
    let monthOptions = []
    let start = checkMin ? this.state.minMonth : 0
    let end = checkMax ? this.state.maxMonth : 12

    for (var i=start; i<end; i++) {
      monthOptions.push({value: i.toString(), display: moment(i+1, 'MM').format('MMMM')})
    }
    console.log(this.state.month)
    console.log(this.state.maxMonth)
    // if selected month is greater than max month, change it to max month
    if (checkMax) {
      if (this.state.month > this.state.maxMonth-1) {
        console.log('settings')
        this.setState({
          month: this.state.maxMonth-1
        })
      }
    }

    // if selected month is lower than min month, change it to min month
    if (checkMin) {
      if (this.state.month < this.state.minMonth) {
        this.setState({
          month: this.state.minMonth
        })
      }
    }

    return monthOptions
  }

  _getYears = () => {
    let yearOptions = []
    const minYear = this.state.minYear
    const maxYear = this.state.maxYear

    for (var i=minYear; i<=maxYear; i++) {
      yearOptions.push({value: i.toString()})
    }

    return yearOptions
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

    return value.toString()
  }

  handleChangeYear = (event) => {
    if (event.target.value === this.state.maxYear) {
      this.setState({
        year: event.target.value,
        monthOptions: this._getMonths(false, true) // check max month
      })
    } else {
      this.setState({
        year: event.target.value
      })
    }
  }

  handleChangeMonth = (event) => {
    if (event.target.value === this.state.maxMonth) {
      this.setState({
        month: event.target.value,
        dayOptions: this._getDays(false, true) // check max day
      })
    } else {
      this.setState({
        month: event.target.value
      })
    }
  }

  handleChangeDay = (event) => {
    this.setState({
      day: event.target.value
    })
  }

  componentWillMount = () => {
    const minYear = this._getMinOrMax(this.props.value, this.props.min, 'year')
    const maxYear = this._getMinOrMax(this.props.value, this.props.max, 'year')
    console.log('minYear: ' + minYear)
    console.log('maxYear: ' + maxYear)

    const minMonth = this._getMinOrMax(this.props.value, this.props.min, 'month')
    const maxMonth = this._getMinOrMax(this.props.value, this.props.max, 'month')
    console.log('minMonth: ' + minMonth)
    console.log('maxMonth: ' + maxMonth)

    const minDay = this._getMinOrMax(this.props.value, this.props.min, 'day')
    const maxDay = this._getMinOrMax(this.props.value, this.props.max, 'day')

    console.log('minDay: ' + minDay)
    console.log('maxDay: ' + maxDay)

    this.setState({
      minYear: minYear,
      maxYear: maxYear,
      minMonth: minMonth,
      maxMonth: maxMonth,
      minDay: minDay,
      maxDay: maxDay
    }, function() {
      const day = this._getDay(this.props.value)
      const days = this._getDays(this.props.value)
      const month = this._getMonth(this.props.value)
      const months = this._getMonths()
      const year = this._getYear(this.props.value)
      const years = this._getYears()

      this.setState({
        day: day,
        dayOptions: days,
        month: month,
        monthOptions: months,
        year: year,
        yearOptions: years
      })
    })
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.year !== prevState.year ||
      this.state.month !== prevState.month ||
      this.state.day !== prevState.day) {
      this.setState({
        value: moment().year(this.state.year).month(this.state.month).date(this.state.day).format(this.props.format)
      })
    }
  }

  render() {
    const cx = classNames.bind(style)
    const componentClass = cx(style['datepicker-component'], this.props.optClass)

    return (
      <div className={componentClass}>
        <SelectField
          options={this.state.monthOptions}
          valueProp='value'
          displayProp='display'
          value={this.state.month.toString()}
          changeCallback={this.handleChangeDay}
        />
        <SelectField
          options={this.state.dayOptions}
          valueProp='value'
          displayProp='value'
          value={this.state.day.toString()}
          changeCallback={this.handleChangeMonth}
        />
        <SelectField
          options={this.state.yearOptions}
          valueProp='value'
          displayProp='value'
          value={this.state.year.toString()}
          changeCallback={this.handleChangeYear}
        />
      </div>
    )
  }
}

export default DatePicker
