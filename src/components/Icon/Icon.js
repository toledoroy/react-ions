import React from 'react';
import svg from '../../assets/icons/icons.svg'

const Icon = (props) => {
  return (
    <svg className={props.name}>
      <use xlinkHref={svg+'#'+props.name}></use>
    </svg>
  )
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
};

export default Icon;
