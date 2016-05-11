import React from 'react'
import classNames from 'classnames/bind'
import style from './style.scss'

class SelectField extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    disabled: false
  }

  static propTypes = {
    /**
     * A list of options for the SelectField.
     */
    options: React.PropTypes.array.isRequired,
    /**
     * Whether the SelectField is disabled.
     */
    disabled: React.PropTypes.bool
  }

  handleChange = (event) => {
    if (typeof this.props.changeCallback === 'function') {
      this.props.changeCallback(event, this.props.value);
    }
  }

  render() {
    // const {
    //   label,
    //   labelPosition,
    //   optClass,
    //   ...other
    // } = this.props;

    // const cx = classNames.bind(style);
    // var disabledClass = this.props.disabled ? style['radio-disabled'] : '';
    // var radioClass = cx(style['radio-component'], optClass, disabledClass);

      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
      this.props.options.map((option, index) =>
      );

        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    )
  }
}

export default SelectField
