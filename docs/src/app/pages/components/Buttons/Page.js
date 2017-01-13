import React from 'react'
import PropsList from 'private/modules/PropsList';
import buttonDocs from '!!docgen!react-ions/lib/Button/Button';
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

const description = {
  buttonDefault: 'This is the `button component` as it appears by default.',
  buttonIcon: 'This is the `button component` with a single icon. The icon can be displayed on the left or right.',
  buttonDisabled: 'This is the disabled `button component`.',
  buttonTypes: 'Here are a more than a few of the button types available on the `button component`.',
  buttonLoaders: 'Here are the available button types with loaders.',
  buttonMultipleOptClassesCode: 'This is the `button component` with multiple optClasses',
  buttonAnchor: 'The `<ButtonAnchor />` component generates an anchor tag.'
};

const ButtonsPage = () => (
  <div>
    <div className={styles.content}>
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
