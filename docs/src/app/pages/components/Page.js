import React from 'react'
import { Alert } from 'react-conventions/lib/Alerts'
import styles from 'private/css/content'

const ComponentsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h3>NPM installation</h3>

        <div className={styles.block}>
          <p>Install the core package with an NPM client like npm or yarn, pulling in all relevant dependencies:</p>
          <pre className={styles.editor}>npm install --save react-ions</pre>
        </div>

        <div className={styles.block}>
          <p>After installation, you'll be able to import the React components in your application:</p>
          <pre className={styles.editor}>
            <div className={styles.line}>import React from 'react'</div>
            <div className={styles.line}>import Button from 'react-conventions/lib/Button'</div>

            <div className={styles.line}>&nbsp;</div>

            <div className={styles.line}>const ExampleButtonDefault = () =&#62; (</div>
              <div className={styles.line}>&nbsp;&nbsp;&#60;Button&#62;I am a Button&#60;/Button&#62;</div>
            <div className={styles.line}>)</div>

            <div className={styles.line}>&nbsp;</div>

            <div className={styles.line}>export default ExampleButtonDefault</div>
          </pre>
        </div>
      </div>
    </div>
  </div>
)

export default ComponentsPage
