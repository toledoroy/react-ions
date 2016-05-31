import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    on: false,
    disabled: false,
    labelPosition: 'left'
  }

  state = {
    on: this.props.on
  }

  static propTypes = {
    /**
     * Whether the toggle is on.
     */
    on: React.PropTypes.bool,
    /**
     * Whether the toggle is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Text displayed with the toggle.
     */
    label: React.PropTypes.string,
    /**
     * Whether the label shouild appear on the right or left.
     */
    labelPosition: React.PropTypes.string,
    /**
     * Optional styles to add to the toggle.
     */
    optClass: React.PropTypes.string,
    /**
     * A callback function to be called when the toggle changes.
     */
    changeCallback: React.PropTypes.func
  };

  handleChange = (event) => {

  }

  componentWillMount = () => {

  }

  componentWillReceiveProps = (nextProps) => {

  }

  render() {
    const {
      checked,
      label,
      labelPosition,
      optClass,
      changeCallback,
      ...other
    } = this.props;

    const cx = classNames.bind(style);
    //var disabledClass = this.props.disabled ? style['toggle-disabled'] : '';
    var toggleClass = cx(style['toggle-component'], optClass);//, disabledClass);

    return (
      <div className={toggleClass}>
      </div>
    )
  }
}

export default Toggle
