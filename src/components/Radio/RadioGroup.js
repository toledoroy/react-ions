import React from 'react';
import classNames from 'classnames/bind';
import Radio from './Radio'
import style from './style.scss';

/**
 * The RadioGroup component.
 */
class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    name: 'radio-group'
  }

  static propTypes = {
    /**
     * Text shown above the radio group.
     */
    label: React.PropTypes.string,
    /**
     * Name of the radio group.
     */
    name: React.PropTypes.string,
    /**
     * Whether the radio group is required.
     */
    required: React.PropTypes.bool,
    /**
     * Whether the radio group is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Which option is selected by default.
     */
    selectedOption: React.PropTypes.number
  };

  componentWillMount() {
    if (this.props.selectedOption) {
      this.props.options[this.props.selectedOption].selected = true;
    }
  }

  handleChange() {
    console.log('callback called');
  }

  getOptions() {
    let name = this.props.name;
    let callback = this.handleChange;
    return this.props.options.map((radio, index) =>
      <Radio key={index} value={radio.value} label={radio.label} name={name} selected={radio.selected} labelPosition={radio.labelPosition} optClass={radio.optClass} selectCallback={callback}></Radio>
    );
  }

  render() {
    const cx = classNames.bind(style);
    // var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    var radioGroupClass = cx(style['radio-group'], this.props.optClass);

    return (
      <div className={radioGroupClass}>
        { this.props.label ? <label className={style['radio-group-label']}>{this.props.label}</label> : null }
        {this.getOptions()}
      </div>
    )
  }
}

export default RadioGroup;
