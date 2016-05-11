import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }

  static propTypes = {
    /**
     * Whether the panel is active. Set by the panelGroup component.
     */
    active: React.PropTypes.bool,
    /**
     * An optional CSS class to be used to local style
     */
    optClass: React.PropTypes.string
  }

  componentWillMount = () => {
    let header = this.getHeader();
    if (header.props.active) {
      this.setState({active: true});
    }
  }

  getHeader = () => {
    return this.props.children[0];
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      console.log(this.props);
      if (this.state.active) {
        this.state.active = false;
      } else {
        this.state.active = true;
      }
    }
  };

  render() {
    const cx = classNames.bind(style);
    const panelActiveClass = (this.state.active) ? 'active' : null;
    const panelClasses = cx(style.panel, this.props.optClass, panelActiveClass);

    const header = React.cloneElement(this.getHeader(), {
      active: this.props.active,
      onClick: this.handleClick
    });

    return (
      <div className={panelClasses}>
        {header}
        {this.props.children[1]}
      </div>
    )
  }
}

export default Panel
