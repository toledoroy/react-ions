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
    checkedOption: this.props.defaultOption !== undefined ? this.props.options[this.props.defaultOption].value : ''
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
     * Which option is checked by default.
     */
    defaultOption: React.PropTypes.number,
    /**
     * Where the label will be placed for all radio buttons. This will override any labelPosition properties defined for an individual radio button.
     */
    labelPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * A callback function to be called when an option is changed.
     */
    changeCallback: React.PropTypes.func
  };

  componentWillMount() {
    if (typeof this.props.defaultOption !== 'undefined') {
      this.props.options[this.props.defaultOption].checked = true;
    }
  }

  handleChange = (event, value) => {
    this.setState({checkedOption: value}, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(event, value);
      }
    });
  }

  getOptions() {
    const groupName = this.props.name;
    const groupLabelPosition = this.props.labelPosition;
    const { options, label, name, value, required, defaultOption, labelPosition, changeCallback, ...other } = this.props;

    return this.props.options.map((radio, index) =>
      <Radio
        key={radio.value}
        value={radio.value}
        label={radio.label}
        name={groupName}
        checked={this.state.checkedOption === radio.value}
        labelPosition={groupLabelPosition || radio.labelPosition}
        optClass={radio.optClass}
        changeCallback={this.handleChange}
        {...other} />
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
