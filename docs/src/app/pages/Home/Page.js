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
    <div>
      <div className={heroClass}>
        <div className={localStyles.skew}>
          <h1>React:ions</h1>
          <h3>A set of React Components used for building user interfaces.</h3>
          <ButtonAnchor path='/components' internal={true} size='lg' optClass='inverted'>Get Started</ButtonAnchor>
          <ButtonAnchor path='https://github.com/GetAmbassador/react-conventions' external={true} target='_blank' size='lg' optClass='inverted'>
            <Icon name='icon-github' width='13' height='13' />
            <span>Github</span>
          </ButtonAnchor>
        </div>
      </div>
      <div className={secondaryClass}>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-link' fill='#3c97d3' height='48' width='48' />
          <h4>Coherent Design Language</h4>
          <p>Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputat.</p>
        </div>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-pulse' fill='#3c97d3' height='48' width='48' />
          <h4>Platform Agnostic</h4>
          <p>In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam.</p>
        </div>
        <div className={localStyles['intro-block']}>
          <Icon name='icon-dollar-bag' fill='#3c97d3' height='48' width='48' />
          <h4>Style with Ease</h4>
          <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
