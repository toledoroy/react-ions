import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

const Breadcrumb = (props) => {
  const depth = props.routes.length;

  const getTags = () => {
    let rootRendered = false;

    return props.routes.map(function(item, index) {
      if (item.title === undefined) return;

      let tags = [];
      if (rootRendered) {
        tags.push(<span className={style.secondary}>{item.title}</span>);        
      }
      else {
        tags.push(<h2 className={style.primary}>{item.title}</h2>);
        rootRendered = true;
      }

      //display arrow if there's another level
      if ((index + 1) < depth) {
        tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />);
      }

      return tags;
    })
  }

  return (
    <div className={style.breadcrumb}>{getTags()}</div>
  )
};

React.propTypes = {
  /**
   * The array of routes to generate the Breadcrumbs.
   */
  routes: React.PropTypes.array.isRequired
};

export default Breadcrumb
