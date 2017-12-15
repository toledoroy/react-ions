import React from 'react'
import Icon from 'react-ions/lib/components/Icon'
import { Link } from 'react-router'
import ButtonAnchor from 'react-ions/lib/components/Button/ButtonAnchor'
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
          <p>Our open source library uses <a href="https://useiconic.com/open#icons" target="_blank">Open Iconic</a>.</p> <p>Below is a short list of icons that we use for our component UI. You can, however, use any of the icons listed <a href="https://useiconic.com/open#icons" target="_blank">here</a>.</p>
          <p>You can also pass a custom svg sprite file, as demonstrated in the <Link to='/components/icons'>Icon examples</Link>.</p>
          <div className={localStyle['icon-list']}>
            {iconsList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IconographyPage;
