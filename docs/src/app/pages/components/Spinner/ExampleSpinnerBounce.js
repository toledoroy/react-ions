import React from 'react'
import Button from 'react-conventions/lib/Button'
import Spinner from 'react-conventions/lib/Spinner'

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
