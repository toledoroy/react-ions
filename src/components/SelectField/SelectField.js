import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'
import Icon from '../Icon'

class SelectField extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * A string to display as the placeholder text.
     */
    placeholder: React.PropTypes.string,
    /**
     * An array objects that which will be used as the options for the select field.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * Which field in the option object will be used as the value of the select field.
     */
    valueProp: React.PropTypes.string.isRequired,
    /**
     * Which field in the option object will be used as the display of the select field.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * Which element in the options array should be automatically selected.
     */
    defaultOption: React.PropTypes.number,
    /**
     * Whether the select field is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Optional styles to add to the select field.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when an option is selected.
     */
    changeCallback: React.PropTypes.func
  }

  state = {
    isOpen: false,
    selected: typeof this.props.defaultOption !== 'undefined' ?
              this.props.options[this.props.defaultOption] :
              ''
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.toggleOptions);    
  }

  toggleOptions = () => {
    this.setState({isOpen: !this.state.isOpen}, function() {
      if (this.state.isOpen) {
        document.addEventListener('click', this.toggleOptions);
      }
      else {
        document.removeEventListener('click', this.toggleOptions);
      }
    });
  }

  selectOption = (option) => {
    this.setState({selected: option}, function() {
      if (typeof this.props.changeCallback === 'function') {
        this.props.changeCallback(option);
      }
    });
  }

  getDisplayText = () => {
    if (this.state.selected !== '') {
      return this.state.selected[this.props.displayProp];
    }
    else if (typeof this.props.placeholder !== 'undefined') {
      return this.props.placeholder;
    }
    else {
      return this.props.options[0][this.props.displayProp];
    }
  }

  render() {
    const cx = classNames.bind(style);
    const disabledClass = this.props.disabled ? style['selectfield-disabled'] : '';
    const activeClass = this.state.isOpen ? style['active'] : null;
    const selectFieldClass = cx(style['selectfield-component'], activeClass, disabledClass, this.props.optClass);

    const options = this.props.options.map((option, index) =>
      <li key={index} onClick={this.selectOption.bind(null, option)}>{option[this.props.displayProp]}</li>
    );

    return (
      <div className={selectFieldClass}>
        <input type='hidden' name='selectfield-value' value={this.state.selected && this.state.selected[this.props.valueProp]} />
        <div className={style['selectfield-value']} onClick={this.toggleOptions}>
          {this.getDisplayText()}
          <Icon name='icon-caret' width='10' height='10' />
        </div>
        <ul>
          {options}
        </ul>
      </div>
    );
  }
}

export default SelectField
