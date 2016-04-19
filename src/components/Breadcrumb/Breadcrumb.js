import React from 'react'
import SVGInline from 'react-svg-inline'
import Icon from 'global/icons/icons.svg'
import style from './style'

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
        <SVGInline svg={'<svg className="icon-arrow-68"><use xlink:href="#icon-arrow-68"></use></svg>'} />
        <span className={style.secondary}>Secondary Page</span>
      </div>
    )
  }
}

export default Breadcrumb
