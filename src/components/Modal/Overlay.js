import React from 'react'

class Overlay extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool.isRequired
  };

  static defaultProps = {
    show: false
  };

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
      transition: 'left 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 400ms, opacity 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms'
    }

    document.body.style.removeProperty('overflow');

    if (this.props.show) {
      document.body.style.overflow = 'hidden';
      style.left = 0;
      style.opacity = 0.6;
      style.transition = 'left 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 400ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms';
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
