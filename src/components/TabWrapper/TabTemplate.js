import React from 'react'

class TabTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: React.PropTypes.node,
    active: React.PropTypes.bool,
    class: React.PropTypes.string
  };

  render() {
    const styles = {
      width: '100%',
      position: 'relative',
      textAlign: 'initial',
    };

    if (!this.props.active) {
      styles.height = 0;
      styles.overflow = 'hidden';
      styles.padding = 0;
      styles.border = 'none';
    }

    return (
      <div style={styles} className={this.props.class}>
        {this.props.children}
      </div>
    );
  }
}

export default TabTemplate;
