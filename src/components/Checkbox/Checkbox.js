import React from 'react'
//import style from './style.scss'
import classNames from 'classnames/bind'

class Checkbox extends React.Component {
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
     * Whether the checkbox is checked.
     */
    checked: React.PropTypes.bool,
    /**
     * Text displayed with the checkbox.
     */
    label: React.PropTypes.string,
    /**
     * Whether the label shouild appear on the right or left.
     */
    labelPosition: React.PropTypes.string,
    /**
     * Optional styles to add to the checkbox.
     */
    optClass: React.PropTypes.string,
    /**
     * Whether the checkbox is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value provided when checked.
     */
    label: React.PropTypes.string
  };

  render() {
    //const cx = classNames.bind(style);
    //const btnClasses = cx(style.btn, props.optClass, props.size);

    return (
      <h2>test</h2>
      // <button type='button' className={btnClasses} {...props}>
      //   {props.children}
      // </button>
    )
  }
}

export default Checkbox
