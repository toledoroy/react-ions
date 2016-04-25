import React from 'react'
import Breadcrumb from 'conventions/Breadcrumb'
import Icon from 'conventions/Icon'
import styles from '../../../../www/css/content'
import list from './IconList'

class IconographyPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let iconsList = list.map(function(icon) {
      return (
        <div className={styles['icon-block']}>
          <Icon name={icon} className={styles.icon}></Icon>
          <code>{icon}</code>
        </div>
      );
    });

    return (
      <div>
        <Breadcrumb routeLocation={location.pathname} />
        <div className={styles.content}>
          <div className={styles.block}>
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
