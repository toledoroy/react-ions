import React from 'react'
import { object, string } from 'prop-types'

const ValidatedField = WrappedComponent => {
  return class extends React.Component {
    static propTypes = {
      /**
       */
      validation: object,
      /**
       */
      message: string
    }

    render = () => {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default ValidatedField
