import React from 'react'
import Node from './Node'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'
import classNames from 'classnames/bind'

const style = prefix(rawStyle)

const Nav = (props) => {
  const cx = classNames.bind(style);
  const navClasses = cx(style.nav, props.optClass);

  const nodes = props.data.map((item, index) =>
    <Node node={item} children={item.nav} key={index} />
  );

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
   * List of navigation items (see code sample)
   */
  data: React.PropTypes.array.isRequired,
  /**
   * An optional class name to pass along to the nav component.
   */
  optClass: React.PropTypes.string
}

export default Nav
