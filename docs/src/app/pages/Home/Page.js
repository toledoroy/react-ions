import React from 'react'
import classNames from 'classnames/bind'
import baseStyles from 'private/css/content'
import localStyles from './styles'
import Button from 'react-conventions/lib/Button'
import ButtonAnchor from 'react-conventions/lib/Button'

const HomePage = (props) => {
  const cx = classNames.bind(baseStyles);
  var heroClass = cx(baseStyles.block, localStyles.hero);
  var secondaryClass = cx(baseStyles.block, localStyles.secondary);

  return (
    <div className={heroClass}>
      <div className={baseStyles.block}>
        <div className={localStyles.skew}>
          <h1>React Conventions</h1>
          <h3>A set of React Components used for building user interfaces.</h3>
          <Button>Demo</Button>
          <ButtonAnchor path='https://github.com/GetAmbassador/react-conventions'>Github</ButtonAnchor>
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
