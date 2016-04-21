import React from 'react';
import classNames from 'classnames';
import ProgressBarLabel from './ProgressBarLabel';
import style from './style.scss';

const ProgressBar = (props) => {
  let percentage = props.value > props.denominator ? 100 : (props.value / props.denominator) * 100;
  let progressStyles = classNames(style.container, style.danger);

  return (
    <div className={progressStyles}>
      { props.label ? <ProgressBarLabel text={ props.label } showPercentage={ props.showPercentage } percentage={ percentage } /> : null }
      <div className={style.outer}>
        <div className={style.inner} style={ {left: (percentage - 100) + '%'} }></div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  value: React.PropTypes.number.isRequired,
  denominator: React.PropTypes.number.isRequired,
  label: React.PropTypes.string,
  showPercentage: React.PropTypes.bool
};

export default ProgressBar;
