import React from 'react'
import NavLink from 'private/modules/NavLink'
import style from '../../www/css/nav'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div role='nav' className={style.nav}>
        <ul>
          <li className={style.active}><NavLink to='/foundations'>Foundations</NavLink>
            <ul>
              <li><NavLink to='/foundations/colors'>Colors</NavLink></li>
              <li><NavLink to='/foundations/typography'>Typography</NavLink></li>
              <li><NavLink to='/foundations/iconography'>Iconography</NavLink></li>
              <li><NavLink to='/foundations/layout'>Layout</NavLink></li>
            </ul>
          </li>
          <li className={style.active}><NavLink to='/components'>Components</NavLink>
            <ul>
              <li><NavLink to='/components/progress-bar'>Progress Bar</NavLink></li>
                <li><NavLink to='/components/icons'>Icons</NavLink></li>
            </ul>
          </li>
          <li><NavLink to='/patterns'>Patterns</NavLink></li>
          <li><NavLink to='/resources'>Resources</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
