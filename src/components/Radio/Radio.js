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

  static defaultProps = {
    selected: false,
    disabled: false,
    labelPosition: 'right'
  }

  static propTypes = {
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
    labelPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * Value of the option.
     */
    value: React.PropTypes.string,
    /**
     * Optional styles to add to the radio component.
     */
    optClass: React.PropTypes.string,
    /**
     * Name specified in the RadioGroup component.
     */
    name: React.PropTypes.string,
    /**
     * A callback (from RadioGroup) to be called when the option is selected.
     */
    selectCallback: React.PropTypes.func
  };

  componentDidMount() {
    this.refs.radio.checked = this.props.selected || false;
    this.refs.radio.disabled = this.props.disabled || false;
  }

  handleChange() {
    if (typeof this.props.selectCallback === 'function') {
      this.props.selectCallback();
    }
  }

  render() {
    const cx = classNames.bind(style);
    var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    var radioClass = cx(style['radio-component'], this.props.optClass, disabledClass);

    return (
      <div className={radioClass}>
        <input type="radio" ref="radio" value={this.props.value} name={this.props.name} onChange={this.handleChange.bind(this)}></input>
        <div>
          { this.props.label && this.props.labelPosition === 'left' ? <label className={style['label-left']}>{this.props.label}</label> : null }
          <div className={style['radio-input']}></div>
          { this.props.label && this.props.labelPosition === 'right' ? <label className={style['label-right']}>{this.props.label}</label> : null }
        </div>
      </div>
    )
  }
}

export default Radio;
