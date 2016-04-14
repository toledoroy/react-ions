import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from './Header'
import Nav from './Nav'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header page={this.props.params.content} />
        <Nav />
        <section role="main">
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default Base;
