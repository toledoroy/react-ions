import React from 'react';
import svg from '../../assets/icons/icons.svg';

const Icon = (props) => {
  return (
    <svg {...props}>
      <use xlinkHref={svg+'#'+props.name}></use>
    </svg>
  )
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  color: React.PropTypes.string,
  className: React.PropTypes.string
};

export default Icon;
