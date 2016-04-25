import React from 'react'
import Breadcrumb from 'react-conventions/lib/Breadcrumb'
import Icon from 'react-conventions/lib/Icon'
import baseStyle from '../../../../www/css/content'
import localStyle from './styles'
import list from './IconList'

class IconographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let iconsList = list.map((icon, index) =>
      <div key={index} className={localStyle['icon-block']}>
        <Icon name={icon} className={localStyle.icon}></Icon>
        <code>{icon}</code>
      </div>
    );

    return (
      <div>
        <div className={baseStyle.content}>
          <div className={baseStyle.block}>
            <h3>Iconography</h3>
            <p>The SvgIcon component takes an SVG path element as its child, and converts it to a React component which displays the path and allows the icon to be styled and respond to mouse events.</p>
            <p>The resulting icon can be used as is, or included as a child for other Material-UI components that use icons, such as Icon Button.</p>
            <h4>Current Library</h4>
            {iconsList}
          </div>
        </div>
      </div>
    )
  }
}

export default IconographyPage;
