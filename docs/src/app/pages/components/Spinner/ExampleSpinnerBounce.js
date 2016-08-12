import React from 'react'
import Button from 'react-conventions/lib/Button'
import Spinner from 'react-conventions/lib/Spinner'

class ExampleSpinnerBounce extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    isLoading: true
  }

  toggleLoader = () => {
    this.setState({ isLoading: !this.state.isLoading })
  }

  render() {
    return(
      <div>
        <Button onClick={this.toggleLoader}>{this.state.isLoading ? 'Hide' : 'Show'} Spinner</Button>
        <Spinner loading={this.state.isLoading} type='spinner-bounce' position='inline' />
      </div>
    )
  }
}

export default ExampleSpinnerBounce;
