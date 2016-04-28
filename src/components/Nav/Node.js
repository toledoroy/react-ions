import React from 'react'
import { Link } from 'react-router'
import Icon from 'react-conventions/lib/Icon'
import style from './style'

class Node extends React.Component {
  constructor(props) {
    super(props);
  }

  handleExternal(e) {
    console.log(e, 'clicked');
    return false;
  }

  render() {
    let childnodes = null;
    let iconParent = this.props.node.icon ? this.props.node.icon : null;

    if (this.props.children) {
      childnodes = this.props.children.map((childnode, index) =>
        <Node node={childnode} children={childnode.nav} key={index} />
      );
    }

    return (
      <li>
        <Link to={this.props.node.route} activeClassName={style.active}>
          {iconParent ? <Icon name={iconParent} fill='currentColor' /> : null}
          {this.props.node.name}
        </Link>
        { childnodes ?
          <ul className={iconParent ? style.indent : null}>{childnodes}</ul>
        : null }
      </li>
    )
  }

}

export default Node;
