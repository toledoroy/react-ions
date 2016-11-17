import React from 'react'
import Button from 'react-conventions/lib/Button'
import Spinner from 'react-conventions/lib/Spinner'

class ExampleSpinnerDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Spinner loading={true} delay={10000} type='spinner-bounce' position='inline' />
      </div>
    )
  }
}

export default ExampleSpinnerDelay;
