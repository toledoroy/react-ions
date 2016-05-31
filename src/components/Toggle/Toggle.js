import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
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
    this.setState({on: !this.state.on})
  }

  componentWillMount = () => {

  }

  componentWillReceiveProps = (nextProps) => {

  }

  render() {
    const cx = classNames.bind(style);
    const onClass = this.state.on ? style.on : ''
    const outerClasses = cx(style.outer, onClass)
    const innerClasses = cx(style.inner, onClass)
    //const disabledClass = this.props.disabled ? style['toggle-disabled'] : ''
    var toggleClass = cx(style['toggle-component'])//optClass);//, disabledClass)

    return (
      <div className={toggleClass} onClick={this.handleChange}>
        <div className={outerClasses} />
        <div className={innerClasses} />
      </div>
    )
  }
}

export default Toggle
