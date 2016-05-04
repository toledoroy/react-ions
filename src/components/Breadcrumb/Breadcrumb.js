import React from 'react'
import Icon from '../Icon'
import classNames from 'classnames/bind'
import style from './style.scss'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
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

  getTags = () => {
    let depth = this.props.routes.length;
    let rootRendered = false;

    return this.props.routes.map(function(item, index) {
      if (item.title === undefined) return;

      let tags = [];
      if (rootRendered) {
        tags.push(<span className={style.secondary}>{item.title}</span>);
      }
      else {
        tags.push(<h2 className={style.primary}>{item.title}</h2>);
        rootRendered = true;
      }

      //display arrow if there's another level
      if ((index + 1) < depth) {
        tags.push(<Icon key={index} name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />);
      }

      return tags;
    })
  }

  render() {
    const cx = classNames.bind(style);
    const breadcrumbClass = cx(style.breadcrumbs);
    const breadcrumbActive = cx(style.breadcrumbs, 'active');

    return (
      <div className={!this.state.active ? breadcrumbClass : breadcrumbActive}>
        <div className={style.breadcrumb}>{this.getTags()}</div>
      </div>
    )
  }
}

React.propTypes = {
  /**
   * The array of routes to generate the Breadcrumbs.
   */
  routes: React.PropTypes.array.isRequired
}

export default Breadcrumb
