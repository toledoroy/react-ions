import React from 'react'
import classNames from 'classnames/bind'
import baseStyles from 'private/css/content'
import localStyles from './styles'
import ButtonAnchor from 'react-conventions/lib/Button/ButtonAnchor'
import Icon from 'react-conventions/lib/Icon'

const HomePage = (props) => {
  const cx = classNames.bind(baseStyles);
  var heroClass = cx(baseStyles.block, localStyles.hero);
  var secondaryClass = cx(baseStyles.block, localStyles.secondary);

  return (
    <div className={heroClass}>
      <div className={baseStyles.block}>
        <div className={localStyles.skew}>
          <h1>Reactant</h1>
          <h3>A set of React Components used for building user interfaces.</h3>
          <ButtonAnchor path='/components' internal={true} size='lg' optClass='inverted'>Get Started</ButtonAnchor>
          <ButtonAnchor path='https://github.com/GetAmbassador/react-conventions' external={true} target='_blank' size='lg' optClass='inverted'>
            <Icon name='icon-github' width='13' height='13' />
            <span>Github</span>
          </ButtonAnchor>
        </div>
      </div>
      <div className={secondaryClass}>
        <h2>Getting Started</h2>
        <p>What is this anyways?</p>
      </div>
    </div>
  )
}

export default HomePage;
