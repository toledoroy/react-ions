import React from 'react'
import Node from './Node'
import nav from 'private/config/NavData'
import style from './style'

const Nav = () => {
  let nodes = nav.map(function(item, index) {
    return (
      <Node node={item} children={item.nav} key={index} />
    );
  });

  return (
    <div role='nav' className={style.nav}>
      <ul>
       {nodes}
      </ul>
    </div>
  );
}

Nav.defaultProps = {
}

Nav.propTypes = {
  // /**
  //  * The name of the nav button.
  //  */
  // name: React.PropTypes.string.isRequired,
  // /**
  //  * The route to where the link goes.
  //  */
  // route: React.PropTypes.string.required
}

export default Nav
