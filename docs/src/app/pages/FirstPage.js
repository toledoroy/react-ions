import React from 'react'
import First from '../../../../src/components/First'

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>First</h2>
        <p>Info about the component here.</p>
        <First />
        <br />
        <code>Code here</code>
      </div>
    )
  }
}

export default FirstPage;
