import React from 'react'
import ReactDOM from 'react-dom'

class RenderToLayer extends React.Component {
  static propTypes = {
    open: React.PropTypes.bool.isRequired,
    render: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.renderLayer();
  }

  componentDidUpdate() {
    this.renderLayer();
  }

  componentWillUnmount() {
    this.unrenderLayer();
  }

  unrenderLayer() {
    if (!this.layer) {
      return;
    }

    ReactDOM.unmountComponentAtNode(this.layer);
    document.body.removeChild(this.layer);
    this.layer = null;
  }

  renderLayer() {
    const {
      open,
      render
    } = this.props;

    if (open) {
      if (!this.layer) {
        this.layer = document.createElement('div');
        document.body.appendChild(this.layer);
      }

      // By calling this method in componentDidMount() and
      // componentDidUpdate(), you're effectively creating a "wormhole" that
      // funnels React's hierarchical updates through to a DOM node on an
      // entirely different part of the page.

      const layerElement = render();

      if (layerElement === null) {
        this.layerElement = ReactDOM.unstable_renderSubtreeIntoContainer(this, null, this.layer);
      } else {
        this.layerElement = ReactDOM.unstable_renderSubtreeIntoContainer(this, layerElement, this.layer);
      }
    } else {
      this.unrenderLayer();
    }
  }

  render() {
    return null;
  }
}

export default RenderToLayer
