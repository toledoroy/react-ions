import React from 'react'
import NavLink from '../modules/NavLink'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul role='nav'>
        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        <li>Foundations
          <ul>
            <li><NavLink to="/foundations/colors">Colors</NavLink></li>
            <li><NavLink to="/foundations/typography">Typography</NavLink></li>
            <li><NavLink to="/foundations/iconography">Iconography</NavLink></li>
            <li><NavLink to="/foundations/layout">Layout</NavLink></li>
          </ul>
        </li>
        <li>Components
          <ul>
            <li><NavLink to="/components/first">First</NavLink></li>
            <li><NavLink to="/components/progress-bar">Progress Bar</NavLink></li>
          </ul>
        </li>
      </ul>
    )
  }
}

export default Nav
