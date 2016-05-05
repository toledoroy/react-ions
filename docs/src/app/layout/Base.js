import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Main from './Main'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'

class Base extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breadcrumbActive: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    (scrollTop > 30) ? this.setState({ active: true }) : this.setState({ active: false });
  }

  render() {
    const cx = classNames.bind(style);
    const breadcrumbClass = cx(style.breadcrumbs);
    const breadcrumbActive = cx(style.breadcrumbs, style['breadcrumb-active']);

    let currentBasePage = this.props.routes[1].path ? this.props.routes[1].path : null;

    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar />
          <div className={style['content-wrap']}>
            { currentBasePage ?
            <div className={!this.state.active ? breadcrumbClass : breadcrumbActive}>
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

export default Base
