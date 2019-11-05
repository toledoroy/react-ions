import React from 'react'
import { string } from 'prop-types'
import optclass from '../internal/OptClass'
import style from './style.scss'

const ValidatedField = WrappedComponent => {
  return class extends React.Component {
    static propTypes = {
      error: string
    }

    render = () => {
      const { className, ...fieldProps } = this.props
      const wrapperErrorClass = fieldProps.error ? 'has-error' : ''
      const validatedFieldClass = optclass(style, ['validated-field', wrapperErrorClass, className])

      return (
        <div className={validatedFieldClass}>
          <WrappedComponent {...fieldProps} />
        </div>
      )
    }
  }
}

export default ValidatedField
