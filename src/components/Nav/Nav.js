import React from 'react'
import Node from './Node'
import style from './style'

const Nav = (props) => {
  let nodes = props.data.map(function(item, index) {
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
  /**
   * The name of the nav button.
   */
  data: React.PropTypes.array.isRequired
}

export default Nav
