import React from 'react'
import style from 'css/breadcrumb'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
  }
  propTypes: {
    routeDetails: React.PropTypes.array.isRequired
  }
  prettify(str) {
    return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
      return (prep && ' ') + letter.toUpperCase();
    });
  }
  breadcrumb() {
    var route = this.props.routeDetails.path.split('/');
    var routes = route.map(function(elem) {
      return this.prettify(elem)
    }.bind(this));
    return routes;
  }
  render() {
    return (
      <div className={style.breadcrumb}>
        <h2>{this.breadcrumb()[0]}</h2>
        {(this.breadcrumb().length > 1) ? <span> > {this.breadcrumb()[1]}</span> : null}
      </div>
    )
  }
}

export default Breadcrumb
