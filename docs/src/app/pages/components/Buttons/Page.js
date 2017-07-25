import React from 'react'
import PropsList from 'private/modules/PropsList';
import buttonDocs from '!!docgen!react-ions/lib/components/Button/Button';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleButtonDefault from './ExampleButtonDefault'
import exampleButtonDefaultCode from '!raw!./ExampleButtonDefault'
import ExampleButtonIcon from './ExampleButtonIcon'
import exampleButtonIconCode from '!raw!./ExampleButtonIcon'
import ExampleButtonAnchor from './ExampleButtonAnchor'
import exampleButtonAnchorCode from '!raw!./ExampleButtonAnchor'
import ExampleButtonConfirmation from './ExampleButtonConfirmation'
import exampleButtonConfirmationCode from '!raw!./ExampleButtonConfirmation'
import ExampleButtonConfirmationCallback from './ExampleButtonConfirmationCallback'
import exampleButtonConfirmationCallbackCode from '!raw!./ExampleButtonConfirmationCallback'
import ExampleButtonConfirmationLoader from './ExampleButtonConfirmationLoader'
import exampleButtonConfirmationLoaderCode from '!raw!./ExampleButtonConfirmationLoader'

const description = {
  buttonIcon: 'This is the `button component` with a single icon. The icon can be displayed on the left or right.',
  buttonLoaders: 'Here are the available button types with loaders.',
  buttonAnchor: 'The `<ButtonAnchor />` component generates an anchor tag.',
  buttonConfirmation: 'The `<ButtonConfirmation />` component generates an overlay to confirm an action.',
  buttonConfirmationCallback: 'This is `<ButtonConfirmation />` component showing the callback in action.'
};

const ButtonsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Button Options'
          description='All options are applied with the `optClass` prop.'
          markup={exampleButtonDefaultCode}>
          <ExampleButtonDefault />
        </CodeExample>
        <CodeExample
          title='Buttons with Icons'
          description={description.buttonIcon}
          markup={exampleButtonIconCode}>
          <ExampleButtonIcon />
        </CodeExample>
        <CodeExample
          title='Button Anchor'
          description={description.buttonAnchor}
          markup={exampleButtonAnchorCode}>
          <ExampleButtonAnchor />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation'
          description={description.buttonConfirmation}
          markup={exampleButtonConfirmationCode}>
          <ExampleButtonConfirmation />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation callback'
          description={description.buttonConfirmationCallback}
          markup={exampleButtonConfirmationCallbackCode}>
          <ExampleButtonConfirmationCallback />
        </CodeExample>
        <CodeExample
          title='Button with Confirmation & loader'
          description={description.buttonConfirmationCallback}
          markup={exampleButtonConfirmationLoaderCode}>
          <ExampleButtonConfirmationLoader />
        </CodeExample>
      </div>
      <div className={styles.block}>
        <h3>Button Props</h3>
        <PropsList list={buttonDocs[0].props} />
      </div>
    </div>
  </div>
)

export default ButtonsPage
