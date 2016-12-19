import React from 'react'
import Snippet from '../../modules/Snippet'
import { Alert } from 'react-ions/lib/Alerts'
import buttonExampleSnippet from '!raw!./Buttons/ExampleButtonDefault'
import styles from 'private/css/content'

const ComponentsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>NPM installation</h3>

        <div className={styles.block}>
          <p><b>React&#123;ions&#125;</b> currently requires <b>React 15.1.0</b>. Support for 15.2+ coming soon.</p>
        </div>

        <div className={styles.block}>
          <p>Install the core package with an NPM client like npm or yarn, pulling in all relevant dependencies:</p>
          <Snippet markup='npm install --save react-ions' />
        </div>

        <div className={styles.block}>
          <p>After installation, you'll be able to import the React components in your application:</p>
          <Snippet markup={buttonExampleSnippet} />
        </div>
      </div>
    </div>
  </div>
)

export default ComponentsPage
