import React from 'react'
import PropsList from 'private/modules/PropsList';
import buttonDocs from '!!docgen!react-ions/lib/components/Button/Button';
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleButtonDefault from './ExampleButtonDefault'
import exampleButtonDefaultCode from '!raw!./ExampleButtonDefault'
import ExampleButtonIcon from './ExampleButtonIcon'
import exampleButtonIconCode from '!raw!./ExampleButtonIcon'
import ExampleButtonDisabled from './ExampleButtonDisabled'
import exampleButtonDisabledCode from '!raw!./ExampleButtonDisabled'
import ExampleButtonTypes from './ExampleButtonTypes'
import exampleButtonTypesCode from '!raw!./ExampleButtonTypes'
import ExampleButtonLoaders from './ExampleButtonLoaders'
import exampleButtonLoadersCode from '!raw!./ExampleButtonLoaders'
import ExampleButtonMultipleOptClasses from './ExampleButtonMultipleOptClasses'
import exampleButtonMultipleOptClassesCode from '!raw!./ExampleButtonMultipleOptClasses'
import ExampleButtonAnchor from './ExampleButtonAnchor'
import exampleButtonAnchorCode from '!raw!./ExampleButtonAnchor'
import ExampleButtonConfirmation from './ExampleButtonConfirmation'
import exampleButtonConfirmationCode from '!raw!./ExampleButtonConfirmation'
import ExampleButtonConfirmationCallback from './ExampleButtonConfirmationCallback'
import exampleButtonConfirmationCallbackCode from '!raw!./ExampleButtonConfirmationCallback'
import ExampleButtonConfirmationLoader from './ExampleButtonConfirmationLoader'
import exampleButtonConfirmationLoaderCode from '!raw!./ExampleButtonConfirmationLoader'

const description = {
  buttonDefault: 'This is the `button component` as it appears by default.',
  buttonIcon: 'This is the `button component` with a single icon. The icon can be displayed on the left or right.',
  buttonDisabled: 'This is the disabled `button component`.',
  buttonTypes: 'Here are a more than a few of the button types available on the `button component`.',
  buttonLoaders: 'Here are the available button types with loaders.',
  buttonMultipleOptClassesCode: 'This is the `button component` with multiple optClasses',
  buttonAnchor: 'The `<ButtonAnchor />` component generates an anchor tag.',
  buttonConfirmation: 'The `<ButtonConfirmation />` component generates an overlay to confirm an action.',
  buttonConfirmationCallback: 'This is `<ButtonConfirmation />` component showing the callback in action.',
  buttonConfirmationLoader: 'This is `<ButtonConfirmation />` component with a loader.'
};

const ButtonsPage = () => (
  <div>
    <div className={styles.content}>
      <div className={styles['lead-content']}>
        <h2>CSS API</h2>
        <p>Use the pt-button class to access button styles. You should implement buttons using the button or a tags rather than div for the purposes of HTML accessibility and semantics.</p>

        <ul>
          <li>Make sure to include type="button" on button tags (use type="submit" when used in a form) and role="button" on a tags for accessibility.</li>
          <li>Add the attribute tabindex="0" to make a tags focusable. button elements are focusable by default.</li>
          <li>For buttons implemented with a tags, add tabindex="-1" to disabled buttons to prevent the user from focusing them by pressing tab on the keyboard.</li>
          <li>Note that a tags do not respond to the :disabled attribute; use .pt-disabled instead.</li>
        </ul>
      </div>

      <div className={styles.block}>
        <CodeExample
          title='Default Button'
          description={description.buttonDefault}
          markup={exampleButtonDefaultCode}>
          <ExampleButtonDefault />
        </CodeExample>
        <CodeExample
          title='Button with Icon'
          description={description.buttonIcon}
          markup={exampleButtonIconCode}>
          <ExampleButtonIcon />
        </CodeExample>
        <CodeExample
          title='Disabled Button'
          description={description.buttonDisabled}
          markup={exampleButtonDisabledCode}>
          <ExampleButtonDisabled />
        </CodeExample>
        <CodeExample
          title='Button Types (aka variety pack)'
          description={description.buttonTypes}
          markup={exampleButtonTypesCode}>
          <ExampleButtonTypes />
        </CodeExample>
        <CodeExample
          title='Buttons With Loaders'
          description={description.buttonLoaders}
          markup={exampleButtonLoadersCode}>
          <ExampleButtonLoaders />
        </CodeExample>
        <CodeExample
          title='Button With Multiple optClasses'
          description={description.buttonMultipleOptClassesCode}
          markup={exampleButtonMultipleOptClassesCode}>
          <ExampleButtonMultipleOptClasses />
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
      <div className={styles.block}>
        <h3>Button Anchor Props</h3>
        <p>TBD</p>
      </div>
    </div>
  </div>
)

export default ButtonsPage
