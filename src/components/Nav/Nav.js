import React from 'react'
import Node from './Node'
import style from './style'
import classNames from 'classnames/bind'

const Nav = (props) => {
  const cx = classNames.bind(style);
  const navClasses = cx(style.nav, props.optClass);

  let nodes = props.data.map(function(item, index) {
    return (
      <Node node={item} children={item.nav} key={index} />
    );
  });

  return (
    <div role='nav' className={navClasses}>
      <ul>
       {nodes}
      </ul>
    </div>
  );
}

Nav.propTypes = {
  /**
   * The name of the nav button.
   */
  data: React.PropTypes.array.isRequired,
  /**
   * An optional class name to pass along to the nav component.
   */
  optClass: React.PropTypes.string
}

export default Nav
