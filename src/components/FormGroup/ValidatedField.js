import React from 'react'
import { array, object, string } from 'prop-types'
import style from './style.scss'

const ValidatedField = WrappedComponent => {
  return class extends React.Component {
    static propTypes = {
      validation: array,
      error: string
    }

    render = () => {
      const wrapperErrorClass = this.props.error ? 'has-error' : null

      return (
        <div>
          <WrappedComponent {...this.props} className={wrapperErrorClass} />
          {this.props.error &&
            <span className={style['has-error__message']}>
              {this.props.error}
            </span>
          }
        </div>
      )
    }
  }
}

export default ValidatedField
