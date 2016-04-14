import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const ProgressBar = (props) => {
  // Make sure the percentage is always below 100%
  let percentage = props.value > props.denominator ? 100 : (props.value / props.denominator) * 100;

  let progressStyles = classNames(style.container, style.danger);

  return (
    //<div className={"ga-progress-bar-container ga-progress-bar-" + (props.size || 'sm') + " ga-progress-bar-" + (props.color || 'success')}>
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
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  showPercentage: React.PropTypes.bool
};

const ProgressBarLabel = (props) => {
  console.log(props);
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
