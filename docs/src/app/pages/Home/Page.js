import React from 'react'
import classNames from 'classnames/bind'
import baseStyles from 'private/css/content'
import localStyles from './styles'
import ButtonAnchor from 'react-ions/lib/Button/ButtonAnchor'
import Icon from 'react-ions/lib/Icon'

const HomePage = (props) => {
  const cx = classNames.bind(baseStyles);
  var heroClass = cx(baseStyles.block, localStyles.hero);
  var secondaryClass = cx(baseStyles.block, localStyles.secondary);

  return (
    <div>
      <div className={heroClass}>
        <div className={localStyles.skew}>
          <h1>React &#123;ions&#125;</h1>
          <h3>A set of React Components used for building user interfaces.</h3>
          <ButtonAnchor path='/components' internal={true} size='lg' optClass='inverted'>Get Started</ButtonAnchor>
          <ButtonAnchor path='https://github.com/GetAmbassador/react-ions' external={true} target='_blank' size='lg' optClass='inverted'>
            <Icon name='icon-github' width='13' height='13' />
            <span>Github</span>
          </ButtonAnchor>
        </div>
      </div>
      <div className={secondaryClass}>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-heart-1' fill='#3c97d3' height='48' width='48' />
          <h4>Coherent Design Language</h4>
          <p>An elegant and easy-to-use UI that's simple, flexible and customizable.</p>
        </div>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-globe-1' fill='#3c97d3' height='48' width='48' />
          <h4>Platform Agnostic</h4>
          <p>Easily scalable across any platform and device.</p>
        </div>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-smiley-happy-4' fill='#3c97d3' height='48' width='48' />
          <h4>Style with Ease</h4>
          <p>Interfaces are easily composable. Developers can churn out UIs with minimal design input.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
