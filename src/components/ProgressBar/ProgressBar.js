import React from 'react';
import style from './style.scss';

const ProgressBar = (props) => {
  // Make sure the percentage is always below 100%
  //<div className={"container ga-progress-bar-" + (props.size || 'sm') + " ga-progress-bar-" + (props.color || 'success')}>
  let percentage = props.value > props.denominator ? 100 : (props.value / props.denominator) * 100;

  return (
    <div className={style.container}>
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
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  showPercentage: React.PropTypes.bool
};

const ProgressBarLabel = (props) => {
  return (
    <label className={style.label}>{ props.text } { props.showPercentage ? <span className={style.percentage}>({ props.percentage }%)</span> : null }</label>
  );
}

ProgressBarLabel.propTypes = {
  text: React.PropTypes.string,
  percentage: React.PropTypes.number,
  showPercentage: React.PropTypes.bool
};

export default ProgressBar;
