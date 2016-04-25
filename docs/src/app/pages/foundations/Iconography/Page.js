import React from 'react'
import Breadcrumb from 'conventions/Breadcrumb'
import Icon from 'conventions/Icon'
import baseStyle from '../../../../www/css/content'
import localStyle from './styles'
import list from './IconList'

class IconographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let iconsList = list.map(function(icon, index) {
      return (
        <div className={localStyle['icon-block']} key={index}>
          <Icon name={icon} className={localStyle.icon}></Icon>
          <code>{icon}</code>
        </div>
      );
    });

    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={baseStyle.content}>
          <div className={baseStyle.block}>
            <h3>Iconography</h3>
            <p>The SvgIcon component takes an SVG path element as its child, and converts it to a React component which displays the path and allows the icon to be styled and respond to mouse events.</p>
            <p>The resulting icon can be used as is, or included as a child for other Material-UI components that use icons, such as Icon Button.</p>
            <h4>Current Library</h4>
            { iconsList }
          </div>
        </div>
      </div>
    )
  }
}

export default IconographyPage;
