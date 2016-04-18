import React from 'react'
import NavLink from 'modules/NavLink'
import styles from 'css/nav'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div role='nav'>
        <ul className={styles['list']}>
          <li><NavLink to='/foundations'>Foundations</NavLink>
          <ul className={styles['nested-list']}>
            <li><NavLink to='/foundations/colors'>Colors</NavLink></li>
            <li><NavLink to='/foundations/typography'>Typography</NavLink></li>
            <li><NavLink to='/foundations/iconography'>Iconography</NavLink></li>
            <li><NavLink to='/foundations/layout'>Layout</NavLink></li>
          </ul>
        </li>
        <li><NavLink to='/components'>Components</NavLink>
          <ul className={styles['nested-list']}>
            <li><NavLink to='/components/first'>First</NavLink></li>
            <li><NavLink to='/components/progress-bar'>Progress Bar</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
    )
  }
}

export default Nav
