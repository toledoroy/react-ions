import React from 'react';
import svg from '../../assets/icons/icons.svg'

class Icon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg className={style[{this.props.iconName}]}>
        <use xlinkHref={svg+'#'+{this.props.iconName}}></use>
      </svg>
    );
  }
}

export default Icon;
