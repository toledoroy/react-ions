import React from 'react';
import Icon from '../Icon';
import style from './style.scss';

const Breadcrumb = (props) => {
  const depth = props.routes.length;

  const getTags = () => {
    return props.routes.map(function(item, index) {
      if (index === 0) return;

      let tags = [];
      if (index === 1) {
        tags.push(<h2 className={style.primary}>{item.title}</h2>);
      }
      else {
        tags.push(<span className={style.secondary}>{item.title}</span>);
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
  routes: React.PropTypes.array.isRequired
};

export default Breadcrumb;
