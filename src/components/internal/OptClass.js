import classNames from 'classnames/bind'

const OptClass = (context, internal, optClass) => {
  const cx = classNames.bind(context)

  optClass = typeof optClass === 'string' ? optClass.split(' ') : optClass
  internal = typeof internal === 'string' ? internal.split(' ') : internal

  let arr = [internal]

  if (optClass !== undefined) {
    arr.push(optClass)
  }

  return cx(arr)
}

export default OptClass
