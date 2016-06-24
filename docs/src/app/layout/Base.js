import React from 'react'
import classNames from 'classnames'
import svg4everybody from 'svg4everybody'
import style from 'private/css/base'
import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

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
    const contentClass = cx(style['content-wrap'])
    const contentClassSidebarActive = cx(style['content-wrap'], style['sidebar-active'])

    let currentBasePage = this.props.routes[1].path ? this.props.routes[1].path : null

    return (
      <div className={style['container-fluid']}>
        <div className={style.row}>
          <Sidebar collapsed={!this.state.sidebarCollapsed} onSidebarClick={this.handleSidebarClick} />
          <div className={!this.state.sidebarCollapsed ? contentClass : contentClassSidebarActive}>
            { currentBasePage ?
            <Header routes={this.props.routes} />
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
