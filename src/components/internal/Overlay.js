import React from 'react'

class Overlay extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired
  };

  static defaultProps = {
    show: false
  };

  createTransition(duration, property, delay, easeFunction) {
    const easeOutFunction = 'cubic-bezier(0.46, 0.03, 0.52, 0.96)';
    easeFunction = easeFunction || easeOutFunction;

    function create(duration, property, delay, easeFunction) {
      duration = duration || '500ms';
      property = property || 'all';
      delay = delay || '0ms';
      easeFunction = easeFunction;

      return `${property} ${duration} ${easeFunction} ${delay}`;
    }

    return create(duration, property, delay, easeFunction);
  }

  getStyles() {
    var style = {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: '-100%',
      opacity: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
      willChange: 'opacity',
      transform: 'translateZ(0)',
      zIndex: 1400,
      transition: `${this.createTransition('0ms', 'left', '400ms')}, ${this.createTransition('400ms', 'opacity')}`
    }

    if (this.props.show) {
      Object.assign(style, {
        left: 0,
        opacity: 0.6,
        transition: `${this.createTransition('0ms', 'left')}, ${this.createTransition('400ms', 'opacity')}`
      });
    }

    return style;
  }

  render() {
    var style = this.getStyles();

    const {
      show,
      ...other,
    } = this.props;

    return (
      <div {...other} ref="overlay" style={style}>
      </div>
    );
  }
}

export default Overlay;
