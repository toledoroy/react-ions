import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import svg4everybody from 'svg4everybody'
import style from 'private/css/base'
import Sidebar from './Sidebar'
import Main from './Main'
import Breadcrumb from 'react-ions/lib/Breadcrumb'

class Base extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    sidebarCollapsed: false
  }

  componentDidMount() {
    svg4everybody()
  }

  componentWillReceiveProps() {
    this.setState({sidebarCollapsed: false})
  }

  handleSidebarClick = () => {
    this.setState({sidebarCollapsed: !this.state.sidebarCollapsed})
  }

  render() {
    const cx = classNames.bind(style)
    const breadcrumbClass = cx(style.breadcrumbs)
    const contentClass = cx(style['content-wrap'])

    let currentBasePage = this.props.routes[1].path ? this.props.routes[1].path : null

    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar collapsed={!this.state.sidebarCollapsed} onSidebarClick={this.handleSidebarClick} />
          <div className={contentClass}>
            { currentBasePage ?
            <div className={breadcrumbClass}>
              <Breadcrumb routes={this.props.routes} gradientColor='#FFFFFF' padding={16} />
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
