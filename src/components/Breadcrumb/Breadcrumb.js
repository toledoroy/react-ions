import React from 'react'
import Icon from '../Icon'
import style from './style.scss'
import Immutable from 'immutable'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * The array of routes to generate the Breadcrumbs.
     */
    routes: React.PropTypes.array.isRequired
  }

  state = {
    routes: Immutable.fromJS(this.props.routes)
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      routes: Immutable.fromJS(nextProps.routes)
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (!Immutable.is(nextState.routes, this.state.routes)) return true

    return false
  }

  breadcrumbNode = (index, title) => {
    let nodeClass = index !== this.state.routes.size - 1 ? style['ellipsis'] : null

    return <em className={nodeClass}>
       <Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />
       <span className={style.secondary}>{title}</span>
     </em>
  }

  getTags = () => {
    const depth = this.state.routes.size
    let rootRendered = false

    return this.state.routes.map((item, index) => {
      const title = item.get('title')
      if (title === undefined) return

      let tags = []
      if (rootRendered) {
        tags.push(this.breadcrumbNode(index, title))
        return tags
      }

      tags.push(<h2 className={style.primary}>{title}</h2>)
      rootRendered = true
      return tags
    })
  }

  render() {
    return (
      <div className={style['breadcrumbs-container']}>
        <div className={style.breadcrumb}>{this.getTags()}</div>
      </div>
    )
  }
}

export default Breadcrumb
