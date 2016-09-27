import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The array of routes to generate the Breadcrumbs.
     */
    routes: React.PropTypes.array.isRequired,
    /**
     * Optional offset to trigger 'minimize' state.
     */
    offset: React.PropTypes.number
  }

  state = {
    minimized: false,
    childrenWidth: 0,
    dropdownOpen: false
  }

  handleResize = () => {
    const breadcrumbsStyle = window.getComputedStyle(this._breadcrumbsContainer)
    const breadcrumbsRect = this._breadcrumbsContainer.getBoundingClientRect()

    var offsetValue = this.props.offset || 0
    var calculatedBreadcrumbWidth = breadcrumbsRect.width - (parseInt(breadcrumbsStyle.paddingLeft) + parseInt(breadcrumbsStyle.paddingRight)) - offsetValue

    if(this.props.routes.length > 1 && this.state.childrenWidth > calculatedBreadcrumbWidth) {
      this.setState({ minimized: true })
    }
    else {
      this.setState({ minimized: false, dropdownOpen: false })
    }
  }

  getChildrenWidth = () => {
    const children = [].slice.call(this._breadcrumbsContainer.children)
    let width = 0

    children.map((element, index) => {
      const elemStyles = window.getComputedStyle(element)
      width += element.getBoundingClientRect().width + parseInt(elemStyles.marginLeft) + parseInt(elemStyles.marginRight)
    })

    return width
  }

  getDropdownChildrenHeight = () => {
    const children = [].slice.call(this._breadcrumbsDropdown.children)
    let height = 0

    children.map((element, index) => {
      const elemStyles = window.getComputedStyle(element)
      height += element.getBoundingClientRect().height
    })

    return height
  }

  componentWillReceiveProps = () => {
    this.setState({ childrenWidth: this.getChildrenWidth() }, () => {
      this.handleResize()
    })
  }

  componentDidMount = () => {
    this.setState({ childrenWidth: this.getChildrenWidth() }, () => {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('click', this.toggleDropdown)
  }

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen }, () => {
      if (this.state.dropdownOpen) {
        document.addEventListener('click', this.toggleDropdown)
      }
      else {
        document.removeEventListener('click', this.toggleDropdown)
      }
    })
  }

  getTags = () => {
    const depth = this.props.routes.length
    const that = this
    let rootRendered = false

    return this.props.routes.map((item, index) => {
      if (item.title === undefined) return

      let tags = []
      if (!that.state.minimized && rootRendered) {
        tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />)
        tags.push(<span className={style.secondary}>{item.title}</span>)
        return tags
      }

      if (!that.state.minimized) {
        tags.push(<h2 className={style.primary}>{item.title}</h2>)
        rootRendered = true
        return tags
      }

      if (rootRendered && index === depth - 1) {
        tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />)
        tags.push(<span className={style.secondary}>{item.title}</span>)
        return tags
      }

      if (!rootRendered) {
        tags.push(<span className={style.ellipsis} onClick={that.toggleDropdown}>...</span>)
        rootRendered = true
        return tags
      }
    })
  }

  getHiddenTags = () => {
    const depth = this.props.routes.length

    return this.props.routes.map((item, index) => {
      if (item.title === undefined) return

      let tags = []
      if (index + 1 < depth) {
        tags.push(<li className={style['dropdown-item']}>{item.title}</li>)
      }

      return tags
    })
  }

  getStyle = () => {
    let style = {
      height: '0px',
      opacity: '0',
      transition: 'height 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 0ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 250ms'
    }

    if (this.state.dropdownOpen && this.state.minimized) {
      style.height = this.getDropdownChildrenHeight() + 'px'
      style.opacity = '1'
      style.transition = 'height 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms, opacity 250ms cubic-bezier(0.46, 0.03, 0.52, 0.96) 0ms'
    }

    return style
  }

  render() {
    const breadcrumbs = this.getTags()

    return (
      <div className={style['breadcrumbs-container']}>
        <div className={style.breadcrumb} ref={(c) => this._breadcrumbsContainer = c}>{this.getTags()}</div>
        <ul className={style['breadcrumbs-dropdown']} style={this.getStyle()} ref={(c) => this._breadcrumbsDropdown = c}>{this.getHiddenTags()}</ul>
      </div>
    )
  }
}

export default Breadcrumb
