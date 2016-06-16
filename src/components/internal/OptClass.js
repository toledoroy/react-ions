import classNames from 'classnames/bind'

const OptClass = (styles, optClass) => {
  const cx = classNames.apply(this, [styles, optClass])
  return cx
}

export default OptClass
