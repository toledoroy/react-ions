import React from 'react'
import { Link } from 'react-router'
import NavLink from '../modules/NavLink'

class Base extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>Ambassador React Conventions</h1>
        <ul role='nav'>
          <li><NavLink to="/foundations">Foundations</NavLink>
            <ul>
              <li><Link to="/foundations/colors">Colors</Link></li>
              <li><Link to="/foundations/typography">Typography</Link></li>
              <li><Link to="/foundations/iconography">Iconography</Link></li>
              <li><Link to="/foundations/layout">Layout</Link></li>
            </ul>
          </li>
          <li><NavLink to="/components">Components</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Base;
