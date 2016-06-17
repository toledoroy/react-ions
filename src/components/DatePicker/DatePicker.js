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
    yearOptions: [
      {value: '2015'},
      {value: '2016'},
      {value: '2017'}
    ]
  }

  static defaultProps = {
    max: { month: '+0', day: '+0', year: '+10'},
    min: { month: '-0', day: '-0', year: '-10'},
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

  _getMonths = () => {
    let monthOptions = []

    for (var i=0; i<12; i++) {
      monthOptions.push({value: i.toString(), display: moment(i+1, 'MM').format('MMMM')})
    }

    return monthOptions
  }

  _getYears = (date, min, max) => {
    let yearOptions = []
    const minYear = this._getMinOrMax(date, min, 'year')
    const maxYear = this._getMinOrMax(date, max, 'year')

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
          value = momentDate.day()
          break;
      }
    }

    return value.toString()
  }


  componentWillMount = () => {
    this.setState({
      day: this._getDay(this.props.value),
      dayOptions: this._getDays(this.props.value),
      month: this._getMonth(this.props.value),
      monthOptions: this._getMonths(),
      year: this._getYear(this.props.value),
      yearOptions: this._getYears(this.props.value, this.props.min, this.props.max)
    })
  }

  render() {
    const cx = classNames.bind(style)
    const componentClass = cx(style['datepicker-component'], this.props.optClass)

    return (
      <div className={componentClass}>
        <SelectField options={this.state.monthOptions} valueProp='value' displayProp='display' value={this.state.month.toString()} />
        <SelectField options={this.state.dayOptions} valueProp='value' displayProp='value' value={this.state.day.toString()} />
        <SelectField options={this.state.yearOptions} valueProp='value' displayProp='value' value={this.state.year.toString()} />
      </div>
    )
  }
}

export default DatePicker
