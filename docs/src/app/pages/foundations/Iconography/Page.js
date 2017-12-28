import React from 'react'
import Icon from 'react-ions/src/components/Icon'
import { Link } from 'react-router'
import ButtonAnchor from 'react-ions/src/components/Button/ButtonAnchor'
import baseStyle from 'private/css/content'
import localStyle from './styles'
import list from './IconList'

const IconographyPage = () => {
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
          <p>Our open source library uses <a href="http://google.github.io/material-design-icons/" target="_blank">Material Design Icons</a>.</p> <p>Below is a short list of icons that we use for our component UI. A comprehensive list is available <a href="http://google.github.io/material-design-icons/" target="_blank">here</a>.</p>
          <div className={localStyle['icon-list']}>
            {iconsList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconographyPage;
