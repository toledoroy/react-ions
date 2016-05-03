import React from 'react'
import classNames from 'classnames'
import baseStyles from 'private/css/content'
import localStyles from './styles'
import Button from 'react-conventions/lib/Button'

const HomePage = (props) => {
  return (
    <div className={baseStyles.content}>
      <div className={baseStyles.block}>
        <h1>React Conventions</h1>
        <h3>A set of React Components used for building user interfaces.</h3>
        <Button>Demo</Button>
        <a href='https://github.com/GetAmbassador/react-conventions'>Github</a>
      </div>
    </div>
  )
}

export default HomePage;
