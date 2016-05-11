import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * The array of routes to generate the Breadcrumbs.
     */
    routes: React.PropTypes.array.isRequired
  }

  state = {
    minimized: false,
    childrenWidth: 0,
    dropdownOpen: false
  }

  handleResize = () => {
    const breadcrumbsStyle = window.getComputedStyle(this._breadcrumbsContainer);
    const breadcrumbsRect = this._breadcrumbsContainer.getBoundingClientRect();

    if(this.state.childrenWidth > breadcrumbsRect.width - (parseInt(breadcrumbsStyle.paddingLeft) + parseInt(breadcrumbsStyle.paddingRight))) {
      this.setState({ minimized: true });
    }
    else {
      this.setState({ minimized: false, dropdownOpen: false });
    }
  }

  getChildrenWidth = () => {
    const children = [].slice.call(this._breadcrumbsContainer.children);
    let width = 0;

    children.map(function(element, index) {
      const elemStyles = window.getComputedStyle(element);
      width += element.getBoundingClientRect().width + parseInt(elemStyles.marginLeft) + parseInt(elemStyles.marginRight);
    });

    return width;
  }

  getDropdownChildrenHeight = () => {
    if (!this._breadcrumbsDropdown) {
      return 0;
    }

    const children = [].slice.call(this._breadcrumbsDropdown.children);
    let height = 0;

    children.map(function(element, index) {
      const elemStyles = window.getComputedStyle(element);
      height += element.getBoundingClientRect().height;
    });

    return height;
  }

  componentDidMount = () => {
    this.setState({ childrenWidth: this.getChildrenWidth() }, function() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    });
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  }

  toggleDropdown = () => {
    let open = this.state.dropdownOpen;
    this.setState({ dropdownOpen: !open })
  }

  getTags = () => {
    const depth = this.props.routes.length;
    const that = this;
    let rootRendered = false;

    return this.props.routes.map(function(item, index) {
      if (item.title === undefined) return;

      let tags = [];
      let hiddenTags = [];

      if (!that.state.minimized) {
        if (rootRendered) {
          tags.push(<span className={style.secondary}>{item.title}</span>);
        }
        else {
          tags.push(<h2 className={style.primary}>{item.title}</h2>);
          rootRendered = true;
        }

        // Display arrow if there's another level
        if ((index + 1) < depth) {
          tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />);
        }
      }
      else {
        if (rootRendered) {
          if (index === depth - 1) {
            tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />);
            tags.push(<span className={style.secondary}>{item.title}</span>);
          }
        }
        else {
          tags.push(<span className={style.ellipsis} onClick={that.toggleDropdown}>...</span>);
          rootRendered = true;
        }
      }

      return tags;
    })
  }

  getHiddenTags = () => {
    const depth = this.props.routes.length;
    let rootRendered = false;

    return this.props.routes.map(function(item, index) {
      if (item.title === undefined) return;

      let tags = [];

      if (index + 1 < depth) {
        tags.push(<li className={style['dropdown-item']}>{item.title}</li>);
      }

      return tags;
    })
  }

  getStyle = () => {
    let style = {
      height: '0px',
      opacity: '0',
      transition: 'height 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 250ms'
    }

    if (this.state.dropdownOpen && this.state.minimized) {
      style.height = this.getDropdownChildrenHeight() + 'px';
      style.opacity = '1';
      style.transition = 'height 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms';
    }

    return style;
  }

  render() {
    const breadcrumbs = this.getTags();

    return (
      <div className={style['breadcrumbs-container']}>
        <div className={style.breadcrumb} ref={(c) => this._breadcrumbsContainer = c}>{this.getTags()}</div>
        <ul className={style['breadcrumbs-dropdown']} style={this.getStyle()} ref={(c) => this._breadcrumbsDropdown = c}>{this.getHiddenTags()}</ul>
      </div>
    )
  }
}

export default Breadcrumb
