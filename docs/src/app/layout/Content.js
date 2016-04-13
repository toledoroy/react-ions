import React from 'react'
import { Link } from 'react-router'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.route.header}</h3>
      </div>
    )
  }
}

export default Content
