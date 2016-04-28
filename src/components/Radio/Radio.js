import React from 'react';
import classNames from 'classnames/bind';
import style from './style.scss';

/**
 * The Radio component.
 */
class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.radio.checked = this.props.selected || false;
    this.refs.radio.disabled = this.props.disabled || false;
  }

  render() {
    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    var radioClass = cx(style['radio-component'], this.props.optClass, disabledClass);

    return (
      <div className={radioClass}>
        <input type="radio" ref="radio" value={this.props.value}></input>
        <div>
          { this.props.label && this.props.labelPosition === 'left' ? <label className={style['label-left']}>{this.props.label}</label> : null }
          <div className={style['radio-input']}></div>
          { this.props.label && this.props.labelPosition === 'right' ? <label className={style['label-right']}>{this.props.label}</label> : null }
        </div>
      </div>
    )
  }
}

Radio.defaultProps = {
  selected: false,
  disabled: false,
  labelPosition: 'right'
}

Radio.propTypes = {
  /**
   * True if the option is selected.
   */
  selected: React.PropTypes.bool,
  /**
   * Whether the option is disabled.
   */
  disabled: React.PropTypes.bool,
  /**
   * Text shown next to the radio input element.
   */
  label: React.PropTypes.string,
  /**
   * The position of the label.
   */
  labelPosition: React.PropTypes.string,
  /**
   * Value of the option.
   */
  value: React.PropTypes.string,
  /**
   * Optional styles to add to the radio component.
   */
  optClass: React.PropTypes.string
};

export default Radio;
