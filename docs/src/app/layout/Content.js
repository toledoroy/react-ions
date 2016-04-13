import React from 'react'
import { Link } from 'react-router'
import NavLink from '../modules/NavLink'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.params.content}</h3>
      </div>
    )
  }
}

export default Content
