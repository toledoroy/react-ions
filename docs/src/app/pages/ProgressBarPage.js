import React from 'react'
import ProgressBar from '../../../../src/components/ProgressBar'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ProgressBar value={10} denominator={1000} />
      </div>
    )
  }
}

export default ProgressBarPage;
