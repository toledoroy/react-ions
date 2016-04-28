import React from 'react'
import { Link } from 'react-router'
import style from './style'

const Node = (props) => {
  let childnodes = null;

  if(props.children) {
    childnodes = props.children.map(function(childnode, index) {
     return (
       <Node node={childnode} children={childnode.nav} key={index} />
     );
   });
  }

  return (
    <li>
      <Link to={props.node.route} activeClassName={style.active}>{props.node.name}</Link>
      { childnodes ?
        <ul>{childnodes}</ul>
      : null }
    </li>
  );

}

export default Node;
