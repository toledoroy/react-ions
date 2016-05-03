import React from 'react'
import EventListener from 'react-event-listener'
import classNames from 'classnames/bind'
import style from './style.scss'
import Overlay from '../internal/Overlay'
import RenderToLayer from '../internal/RenderToLayer'
import Icon from '../Icon'

/**
 * The Modal component.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    open: false,
    overlayClose: true
  }

  static propTypes = {
    /**
     * Action buttons to display below the Modal content (`children`).
     * This property accepts either a React element, or an array of React elements.
     */
    actions: React.PropTypes.node,
    /**
     * Controls whether the Modal is opened or not.
     */
    open: React.PropTypes.bool.isRequired,
    /**
     * When set to false it will force the user to use one of the actions in the `Modal`.
     * Clicking outside the `Modal` will not trigger the `onRequestClose` in that case.
     */
    overlayClose: React.PropTypes.bool,
    /**
     * Fired when the `Modal` is requested to be closed by a click outside the `Modal` or on the buttons.
     *
     * @param {bool} buttonClicked Determines whether a button click triggered this request.
     */
    onRequestClose: React.PropTypes.func,
    /**
     * The title to display on the `Modal`. Could be number, string, element or an array containing these types.
     */
    title: React.PropTypes.node,
    /**
     * Optional styles to add to the modal.
     */
    optClass: React.PropTypes.string,
    /**
     * The size of the modal. The default is 'md' (medium).
     */
    size: React.PropTypes.oneOf(['sm', 'md', 'lg'])
  };

  handleKeyUp = (event) => {
    // When Esc is pressed
    if (event.keyCode === 27) {
      this.requestClose(false);
    }
  }

  handleCloseClick = () => {
    this.requestClose(false);
  }

  requestClose = (buttonClicked) => {
    if (!buttonClicked && !this.props.overlayClose) {
      return;
    }

    if (this.props.onRequestClose) {
      this.props.onRequestClose(!!buttonClicked);
    }
  }

  renderModal = () => {
    const cx = classNames.bind(style);
    const modalOpenClass = this.props.open ? style['modal-open'] : '';
    const modalSizeClass = this.props.size ? style['modal-' + this.props.size] : '';
    const modalClass = cx(style['modal-component'], this.props.optClass, modalOpenClass);
    const modalContentClass = cx(style['modal-content'], modalSizeClass);

    const actionsContainer = React.Children.count(this.props.actions) > 0 && (
      <div className={style['modal-actions']}>
        {React.Children.toArray(this.props.actions)}
      </div>
    );

    return (
      <div className={modalClass}>
        {this.props.open &&
          <EventListener
            elementName='window'
            onKeyUp={this.handleKeyUp}
          />
        }
        <Overlay
          show={this.props.open}
          onClick={this.handleCloseClick}
        />
        <div className={modalContentClass}>
          <div className={style['modal-header']}>
            {this.props.overlayClose ? <div className={style['modal-close']}>
              <Icon name='icon-delete-1' width='12' height='12' onClick={this.handleCloseClick} />
            </div> : null}
            {this.props.title ? <h1>{this.props.title}</h1> : null}
          </div>
          <div className={style['modal-body']}>
            {this.props.children}
          </div>
          <div className={style['modal-footer']}>
            {actionsContainer}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      // Render the modal inside a div at the bottom of the document body
      <RenderToLayer render={this.renderModal} open={true} />
    )
  }
}

export default Modal
