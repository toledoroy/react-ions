import React from 'react'
import style from './style'
import icon from '../../assets/icons/icons.svg'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  propTypes: {
    routeLocation: React.PropTypes.string.isRequired
  }
  componentWillMount() {
    var routes = this.parseRouteLocation();
    var pages = this.prepareRouteText(routes);
  }
  parseRouteLocation = () => {
    var routeLocation = this.props.routeLocation.split('/').slice(1);
    return routeLocation;
  }
  prepareRouteText = (arr) => {
    return arr.map(elem => this.prettify(elem));
  }
  prettify = (str) => {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }
  render() {
    return (
      <div className={style.breadcrumb}>
        <h2 className={style.primary}>Primary</h2>
        <svg className={style['icon-arrow-68']}><use xlinkHref={icon+'#icon-arrow-68'}></use></svg>
        <span className={style.secondary}>Secondary Page</span>
      </div>
    )
  }
}

export default Breadcrumb
