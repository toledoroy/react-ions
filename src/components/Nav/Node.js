import React from 'react'
import { Link } from 'react-router'
import Icon from 'react-conventions/lib/Icon'
import style from './style'

const Node = (props) => {
  let childnodes = null;
  let iconParent = props.node.icon ? props.node.icon : null;

  if (props.children) {
    childnodes = props.children.map((childnode, index) =>
      <Node node={childnode} children={childnode.nav} key={index} />
    );
  }

  return (
    <div>
      { props.node.external ?
        <li>
          <a href={props.node.route} target="_blank">
            {iconParent ? <Icon name={iconParent} fill='currentColor' /> : null}
            {props.node.name}
          </a>
          { childnodes ?
            <ul className={iconParent ? style.indent : null}>{childnodes}</ul>
          : null }
        </li>
        :
        <li>
          <Link to={props.node.route} activeClassName={style.active}>
            {iconParent ? <Icon name={iconParent} fill='currentColor' /> : null}
            {props.node.name}
          </Link>
          { childnodes ?
            <ul className={iconParent ? style.indent : null}>{childnodes}</ul>
          : null }
        </li>
        }
    </div>
  )
}

export default Node;
