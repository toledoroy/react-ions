import React from 'react'
import Button from 'react-ions/src/components/Button'
import Spinner from 'react-ions/src/components/Spinner'

class ExampleSpinnerBounce extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: true
  }

  toggleLoader = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    return(
      <div>
        <Button onClick={this.toggleLoader}>{this.state.loading ? 'Hide' : 'Show'} Spinner</Button>
        <Spinner loading={this.state.loading} type='spinner-bounce' position='inline' />
      </div>
    )
  }
}

export default ExampleSpinnerBounce;
