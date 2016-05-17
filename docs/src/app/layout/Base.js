import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Main from './Main'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    breadcrumbActive: false,
    sidebarCollapsed: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    (scrollTop > 30) ? this.setState({ breadcrumbActive: true }) : this.setState({ breadcrumbActive: false });
  }

  handleSidebarClick = () => {
    this.setState({
      sidebarCollapsed: !this.state.sidebarCollapsed
    });
  }

  render() {
    const cx = classNames.bind(style);
    const breadcrumbClass = cx(style.breadcrumbs);
    const breadcrumbActive = cx(style.breadcrumbs, style['breadcrumb-active']);
    const contentClass = cx(style['content-wrap']);
    const contentClassSidebarActive = cx(style['content-wrap'], style['sidebar-active']);

    let currentBasePage = this.props.routes[1].path ? this.props.routes[1].path : null;

    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar collapsed={!this.state.sidebarCollapsed} onSidebarClick={this.handleSidebarClick} />
          <div className={!this.state.sidebarCollapsed ? contentClass : contentClassSidebarActive}>
            { currentBasePage ?
            <div className={!this.state.breadcrumbActive ? breadcrumbClass : breadcrumbActive}>
              <Breadcrumb routes={this.props.routes} />
            </div>
            : null
            }
            <Main children={this.props.children} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Base)
