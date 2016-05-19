import React from 'react'
import classNames from 'classnames/bind'
import ButtonToggle from './ButtonToggle'
import style from './style.scss'

/**
 * The ButtonGroup component.
 */
class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    checkedOption: this.props.defaultOption !== undefined ? this.props.options[this.props.defaultOption].value : ''
  };

  static defaultProps = {
    disabled: false,
    required: false
  };

  static propTypes = {
    /**
     * Text shown above the button group.
     */
    label: React.PropTypes.string,
    /**
     * The name that will be applied to all radio buttons inside it.
     */
    name: React.PropTypes.string.isRequired,
    /**
     * Whether the button group is required.
     */
    required: React.PropTypes.bool,
    /**
     * Whether the button group is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * A list of options for the button group.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * Which option is checked by default.
     */
    defaultOption: React.PropTypes.number,
    /**
     * A callback function to be called when an option is changed.
     */
    changeCallback: React.PropTypes.func,
    /**
     * The style for the buttons in the group.
     */
    buttonStyle: React.PropTypes.string
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
    const buttonStyle = this.props.buttonStyle;
    const { options, label, name, value, required, defaultOption, changeCallback, ...other } = this.props;

    return this.props.options.map((buttonToggle, index) =>
      <ButtonToggle
        key={buttonToggle.value}
        value={buttonToggle.value}
        label={buttonToggle.label}
        name={groupName}
        checked={this.state.checkedOption === buttonToggle.value}
        size='lg'
        optClass={this.state.checkedOption === buttonToggle.value ? buttonStyle : 'secondary'}
        changeCallback={this.handleChange}
        {...other} />
    );
  }

  render() {
    const cx = classNames.bind(style);
    var buttonGroupClass = cx(style['button-group'], this.props.optClass);

    return (
      <div className={buttonGroupClass}>
        {this.props.required ? <span className={style.asterisk}>*</span> : null}
        {this.props.label ? <label className={style['button-group-label']}>{this.props.label}</label> : null}
        <div className={style.options}>
          {this.getOptions()}
        </div>
      </div>
    )
  }
}

export default ButtonGroup
