import React from 'react'
import Icon from 'react-ions/lib/Icon'
import baseStyle from 'private/css/content'
import localStyle from './styles'
import list from './IconList'

const IconographyPage = (props) => {
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
          <p>The Ambassador icon library currently uses the Streamline icon set. </p>
          <div className={localStyle['icon-list']}>
            {iconsList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconographyPage;
