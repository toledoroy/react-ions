import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from 'react-conventions/lib/Icon'

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    type: 'success'
  }

  static propTypes = {
    /**
     * The alert type.
     */
    type: React.PropTypes.oneOf(['success', 'warning', 'info', 'danger']),
    /**
     * Optional styles to add to the alert component.
     */
    optClass: React.PropTypes.string
  };

  render() {
    const cx = classNames.bind(style);
    const alertClasses = cx(style.alert, this.props.optClass, this.props.type);
    const alertIcons = {
      success: 'icon-check-circle-2-1',
      warning: 'icon-alert-1',
      info: 'icon-information',
      danger: 'icon-delete-3'
    };

    return (
      <div className={alertClasses}>
        <Icon name={alertIcons[this.props.type]} width='17' height='17' />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Alert
