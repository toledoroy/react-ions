import React from 'react'
import Snippet from '../../modules/Snippet'
import { Alert } from 'react-ions/lib/Alerts'
import buttonExampleSnippet from '!raw!./Buttons/ExampleButtonDefault'
import inputExampleSnippet from '!raw!./Input/ExampleInputOptClass'
import snippetStyles from 'private/css/snippet'
import styles from 'private/css/content'

const ComponentsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <h2>Installation, Prerequisites and Basic Usage</h2>
        <p>React&#123;ions&#125; is a suite of <a href="http://facebook.github.io/react/">React</a> components that implement <a href="http://getambassador.com">Ambassador's</a> Design and UX pastterns. They are designed to be re-usable and composable across large-scale web applications. They are powered by <a href="https://github.com/css-modules/css-modules">CSS Modules</a> and integrate with your <a href="http://webpack.github.io/">webpack</a> workflow, or any other module bundler.</p>
      </div>

      <div className={styles.block}>
        <h2>Installation</h2>
        <Snippet markup='npm install --save react-ions' />
      </div>

      <div className={styles.block}>
        <h2>Prerequisites</h2>
        <p>React&#123;ions&#125; currently requires <b>React 15.1.0</b> (support for 15.2+ coming soon).</p>

        <p>We use <a href="https://github.com/css-modules/css-modules">CSS Modules</a> by default to import stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.</p>
      </div>

      <div className={styles.block}>
        <h2>Basic Usage</h2>
        <p>In this minimal example, we import a Button with styles already bundled:</p>
        <Snippet markup={buttonExampleSnippet} />
        <Alert type="info" optClass={styles['alert-override']}>If you are not seeing any styles when you load a component, please make sure your project configuration (Webpack, etc.) is using CSS modules to process SASS.</Alert>
      </div>

      <div className={styles.block}>
        <h2>Customizing components</h2>
        <p>Each React&#123;ion&#125; component exposes an <code className={snippetStyles['snippet-inline']}>optClass</code> prop, to enable style overrides.</p>
        <Snippet markup={inputExampleSnippet} />
        <p>You can now override <code className={snippetStyles['snippet-inline']}>Input</code> styles with the <code className={snippetStyles['snippet-inline']}>.input-overrides</code> class.</p>
      </div>
    </div>
  </div>
)

export default ComponentsPage
