import React from 'react'
import EventListener from 'react-event-listener'
import classNames from 'classnames/bind'
import style from './style.scss'
import Overlay from '../internal/Overlay'

/**
 * The Modal component.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    open: false,
    modal: false
  }

  static propTypes = {
    /**
     * Action buttons to display below the Modal content (`children`).
     * This property accepts either a React element, or an array of React elements.
     */
    actions: React.PropTypes.node,
    /**
     * The contents of the `Modal`.
     */
    children: React.PropTypes.node,
    /**
     * Controls whether the Modal is opened or not.
     */
    open: React.PropTypes.bool.isRequired,
    /**
     * Force the user to use one of the actions in the `Modal`.
     * Clicking outside the `Modal` will not trigger the `onRequestClose`.
     */
    modal: React.PropTypes.bool,
    /**
     * Fired when the `Modal` is requested to be closed by a click outside the `Modal` or on the buttons.
     *
     * @param {bool} buttonClicked Determines whether a button click triggered this request.
     */
    onRequestClose: React.PropTypes.func,
    /**
     * The title to display on the `Modal`. Could be number, string, element or an array containing these types.
     */
    title: React.PropTypes.node
  };

  handleKeyUp(event) {
    // When Esc is pressed
    if (event.keyCode === 27) {
      this.requestClose(false);
    }
  }

  handleClickOverlay() {
    this.requestClose(false);
  }

  requestClose(buttonClicked) {
    if (!buttonClicked && this.props.modal) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  }

  handleResize() {
  }

  render() {
    const cx = classNames.bind(style);
    var modalClass = cx(style['modal-component'], this.props.optClass);

    return (
      <div className={modalClass}>
        {this.props.open &&
          <EventListener
            elementName='window'
            onKeyUp={this.handleKeyUp.bind(this)}
            onResize={this.handleResize.bind(this)}
          />
        }
        <Overlay
          show={this.props.open}
          onClick={this.handleClickOverlay.bind(this)}
        />
      </div>
    )
  }
}

export default Modal
