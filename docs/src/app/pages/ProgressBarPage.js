import React from 'react'
import ProgressBar from 'components/ProgressBar'
import ProgressBarLabel from 'components/ProgressBar'

class ProgressBarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Title here</h2>
        <p>Info about the component here.</p>
        <ProgressBar value={20} denominator={100} />
        <br />
        <code>Code here</code>
      </div>
    )
  }
}

export default ProgressBarPage;
