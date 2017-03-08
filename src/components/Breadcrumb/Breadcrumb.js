import React from 'react'
import Immutable from 'immutable'
import InlineStylePrefixer from '../internal/InlineStylePrefixer'
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
     * Optional padding to add to the left and right side of the breadcrumb
    */
    padding: React.PropTypes.number,
    /**
     * Optional background color for overflow gradient on small screens
     * Defaults to white
    */
    gradientColor: React.PropTypes.string
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

  getGradientStyles = () => {
    let backgroundColor = this.props.gradientColor || '#fff'

    let styles = {
      background: `linear-gradient(90deg, transparent, ${backgroundColor})`
    }

    return InlineStylePrefixer(styles)
  }

  getContainerStyles = () => {
    let styles = {
      marginLeft: this.props.padding || '0',
      paddingRight: this.props.padding || '0'
    }

    return InlineStylePrefixer(styles)
  }

  breadcrumbNode = (title) => {
    return <em>
       <Icon name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />
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
        tags.push(this.breadcrumbNode(title))
        return tags
      }

      tags.push(<h2 className={style.primary}>{title}</h2>)
      rootRendered = true
      return tags
    })
  }

  render() {
    const gradientColor = {
      color: this.props.gradientColor || 'white'
    }

    return (
      <div className={style['breadcrumbs-outer']}>
        <div className={style['overflow-gradient']} style={this.getGradientStyles()} />
        <div className={style['breadcrumbs-container']} style={this.getContainerStyles()}>
          <div className={style.breadcrumb}>{this.getTags()}</div>
        </div>
      </div>
    )
  }
}

export default Breadcrumb
