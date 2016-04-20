import React from 'react';
import style from './style.scss';

class First extends React.Component {
  static propTypes = {
    test: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={style.box}>
          Box
        </div>
        <div className={style.mod}>
          Box with compose mod
        </div>
      </div>
    );
  }
}

export default First;
