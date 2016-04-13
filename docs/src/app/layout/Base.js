import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from '../modules/NavLink'

class Base extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <ul role='nav'>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/foundations">Foundations</NavLink>
            <ul>
              <li><NavLink to="/foundations/colors">Colors</NavLink></li>
              <li><NavLink to="/foundations/typography">Typography</NavLink></li>
              <li><NavLink to="/foundations/iconography">Iconography</NavLink></li>
              <li><NavLink to="/foundations/layout">Layout</NavLink></li>
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
