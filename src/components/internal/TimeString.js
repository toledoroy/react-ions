import moment from 'moment'

const TimeString = (timestamp) => {
  timestamp = timestamp.slice(-1) === 'Z' ? timestamp : timestamp + 'Z'

  let lessThanOneHour = (moment().diff(timestamp, 'hours') < 1)
  let taskRelative = moment(timestamp).fromNow()
  let taskHoursMinutes = moment(timestamp).format('h:mm a')
  let taskCalendar = moment(timestamp).calendar()

  let str
  if (lessThanOneHour) {
    str = taskRelative
  }
  else {
    str = taskCalendar
  }

  return str
}

export default TimeString
