import React from 'react'
import classNames from 'classnames'
import style from './style.scss'

const ProgressBarLabel = (props) => {
  return (
    <label className={style.label}>{ props.text } 
      { props.showPercentage ? <span className={style.percentage}>({ props.percentage }%)</span> : null }
    </label>
  );
}

ProgressBarLabel.propTypes = {
  text: React.PropTypes.string,
  percentage: React.PropTypes.number,
  showPercentage: React.PropTypes.bool
};

export default ProgressBarLabel;