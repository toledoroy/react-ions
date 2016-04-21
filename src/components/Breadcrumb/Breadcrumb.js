import React from 'react'
import Icon from '../Icon'
import style from './style'

const Breadcrumb = (props) => {
  const getBreadcrumb = () => {
    var routes = this.parseRouteLocation();
    var pages = this.prepareRouteText(routes);
    return pages;
  }
  const parseRouteLocation = () => {
    var routeLocation = this.props.routeLocation.split('/').slice(1);
    return routeLocation;
  }
  const prepareRouteText = (arr) => {
    return arr.map(elem => this.prettify(elem));
  }
  const prettify = (str) => {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }

  return (
    <div className={style.breadcrumb}>
      <h2 className={style.primary}>Primary</h2>
      <Icon name='icon-arrow-68' className={style['icon-arrow-68']} width='14' height='14' color='#879098' />
      <span className={style.secondary}>Secondary Page</span>
    </div>
  )
};

React.propTypes = {
  routeLocation: React.PropTypes.string.isRequired
};

export default Breadcrumb
