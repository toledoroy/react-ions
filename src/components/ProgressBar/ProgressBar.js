import React from 'react'
import classNames from 'classnames'
import ProgressBarLabel from './ProgressBarLabel'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'

const style = prefix(rawStyle)

const ProgressBar = (props) => {
  let percentage = props.value > props.denominator ? 100 : (props.value / props.denominator) * 100;
  let progressStyles = classNames(style['progress-bar'], style[props.optClass]);

  return (
    <div className={progressStyles}>
      { props.label ? <ProgressBarLabel text={ props.label } showPercentage={ props.showPercentage } percentage={ percentage } /> : null }
      <div className={style.outer}>
        <div className={style.inner} style={ {left: (percentage - 100) + '%'} }></div>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  optClass: 'danger',
  denominator: 100,
  value: 0,
  showPercentage: false
}

ProgressBar.propTypes = {
  /**
   * The value of progress.
   */
  value: React.PropTypes.number.isRequired,
  /**
   * The max value of progress.
   */
  denominator: React.PropTypes.number.isRequired,
  /**
   * Text shown above the progress bar.
   */
  label: React.PropTypes.string,
  /**
   * Show or hide the percentage with the progress bar.
   */
  showPercentage: React.PropTypes.bool,
  /**
   * Optional styles to add to the progress bar component.
   */
  optClass: React.PropTypes.string
};

export default ProgressBar
