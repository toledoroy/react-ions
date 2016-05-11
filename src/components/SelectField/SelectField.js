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
     * A list of options for the select field.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * Whether the select field is disabled.
     */
    disabled: React.PropTypes.bool
  }

  state = {
    isOpen: false,
    selected: this.props.options.length ? this.props.options[0] : null
  }

  toggleOptions = () => {
    this.setState({isOpen: !this.state.isOpen}, function() {
      if (this.state.isOpen) {
        document.addEventListener("click", this.toggleOptions);
      }
      else {
        document.removeEventListener("click", this.toggleOptions);
      }
    });
  }

  selectOption = (option) => {
    this.setState({selected: option});
  }

  render() {
    // const {
    //   label,
    //   labelPosition,
    //   optClass,
    //   ...other
    // } = this.props;

    const cx = classNames.bind(style);
    // var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    const dropdownClass = cx(style['dropdown-component']);//, optClass, disabledClass);

    const options = this.props.options.map((option, index) =>
      <li key={index} onClick={this.selectOption.bind(null, option)}>{option}</li>
    );

    return (
      <div className={dropdownClass}>
        <input type='hidden' name='dropdown-value' value={this.state.selected} />
        <div className={style['dropdown-value']} onClick={this.toggleOptions}>
          {this.state.selected}
          <Icon name={this.state.isOpen ? 'icon-arrow-57' : 'icon-arrow-58'} width='10' height='5' />
        </div>
        <ul className={this.state.isOpen ? style['show'] : null}>
          {options}
        </ul>
      </div>
    );
  }
}

export default SelectField
