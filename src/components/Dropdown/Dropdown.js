import React from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import style from './style.scss'
import classNames from 'classnames/bind'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    isOpened: false
  }

  static propTypes = {
    /**
     * Whether the dropdown is visible
     */
    isOpened: React.PropTypes.bool,
    /**
     * Optional styles to add to the button.
     */
    optClass: React.PropTypes.string,
    /**
     * An element to pass as a target (number, string, node).
     */
    trigger: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string,
      React.PropTypes.node
    ])
  }

  state = {
    isOpened: false
  }

  componentWillMount = () => {
    if (this.props.isOpened === true) {
      this.setState({isOpened: true});
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isOpened === true) {
      this.setState({isOpened: true});
    }
  }

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({isOpened: !this.state.isOpened});
  }

  handleClickOutside() {
    this.setState({isOpened: false});
  }

  render() {
    const cx = classNames.bind(style);
    const isOpenedClass = this.state.isOpened ? style['is-opened'] : null;
    const dropdownClasses = cx(style['dropdown-component'], this.props.optClass, isOpenedClass);

    return (
      <div className={dropdownClasses}>
        <span className={style.trigger} onClick={this.toggleDropdown}>{this.props.trigger}</span>
        <div className={style['dropdown-wrapper']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(Dropdown)
