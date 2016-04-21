import React from 'react';
import Icon from '../Icon';
import style from './style';

const Breadcrumb = (props) => {
  console.log(props.routes);
  return (
    <div className={style.breadcrumb}>
      <h2 className={style.primary}>{props.routes[1].title}</h2>
      <Icon name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />
      <span className={style.secondary}>{props.routes[2].title}</span>
    </div>
  )
};

React.propTypes = {
  routeLocation: React.PropTypes.string.isRequired
};

export default Breadcrumb
