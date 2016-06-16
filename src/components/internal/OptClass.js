import classNames from 'classnames/bind'

const OptClass = (context, internal, optClass) => {
  optClass = typeof optClass === 'string' ? [optClass] : optClass
  internal = typeof internal === 'string' ? [internal] : internal
  const cx = classNames.bind(context)
  return cx([...internal, ...optClass])
}

export default OptClass
