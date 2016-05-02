import React from 'react'
import classNames from 'classnames/bind'
import Radio from './Radio'
import style from './style.scss'

/**
 * The RadioGroup component.
 */
class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    selectedOption: typeof this.props.defaultOption !== 'undefined' ? this.props.options[this.props.defaultOption].value : ''
  };

  static defaultProps = {
    disabled: false,
    required: false,
    labelPosition: 'right'
  };

  static propTypes = {
    /**
     * Text shown above the radio group.
     */
    label: React.PropTypes.string,
    /**
     * The name that will be applied to all radio buttons inside it.
     */
    name: React.PropTypes.string.isRequired,
    /**
     * Whether the radio group is required.
     */
    required: React.PropTypes.bool,
    /**
     * Whether the radio group is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A list of options for the radio group.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * Which option is selected by default.
     */
    defaultOption: React.PropTypes.number,
    /**
     * Where the label will be placed for all radio buttons. This will override any labelPosition properties defined for an individual radio button.
     */
    labelPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * A callback function to be called when an option is selected.
     */
    onChange: React.PropTypes.func
  };

  componentWillMount() {
    if (typeof this.props.defaultOption !== 'undefined') {
      this.props.options[this.props.defaultOption].selected = true;
    }
  }

  handleChange(event, value) {
    this.setState({selectedOption: value}, function() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event, value);
      }
    });
  }

  getOptions() {
    let groupName = this.props.name;
    let groupLabelPosition = this.props.labelPosition;
    let callback = this.handleChange;
    // Pass along the disabled attribute
    let { options, label, name, required, defaultOption, labelPosition, ...other } = this.props;

    return this.props.options.map((radio, index) =>
      <Radio
        key={radio.value}
        ref={radio.value}
        value={radio.value}
        label={radio.label}
        name={groupName}
        selected={radio.selected}
        labelPosition={groupLabelPosition || radio.labelPosition}
        optClass={radio.optClass}
        selectCallback={callback.bind(this)}
        {...other}
      />
    );
  }

  render() {
    const cx = classNames.bind(style);
    var radioGroupClass = cx(style['radio-group'], this.props.optClass);

    return (
      <div className={radioGroupClass}>
        {this.props.required ? <span className={style.asterisk}>*</span> : null}
        {this.props.label ? <label className={style['radio-group-label']}>{this.props.label}</label> : null}
        {this.getOptions()}
      </div>
    )
  }
}

export default RadioGroup
