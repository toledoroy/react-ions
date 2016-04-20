import React from 'react';
import svg from '../../assets/icons/icons.svg'

const Icon = (props) => {
  return (
    <svg name={props.name} className={props.css} fill={props.color} height={props.size} width={props.size}>
      <use xlinkHref={svg+'#'+props.name}></use>
    </svg>
  )
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  css: React.PropTypes.string
};

export default Icon;
