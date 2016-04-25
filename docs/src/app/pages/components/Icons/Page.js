import React from 'react'
import Breadcrumb from 'conventions/Breadcrumb'
import CodeExample from 'global/modules/CodeExample'
import ExampleIconDefault from './ExampleIconDefault'
import exampleIconDefaultCode from '!raw!./ExampleIconDefault'
import ExampleIconCustom from './ExampleIconCustom'
import exampleIconCustomCode from '!raw!./ExampleIconCustom'
import styles from '../../../../www/css/content'

const description = {
  iconDefault: 'This is the `icon component` with only a `name` property, which is required. See our [full list of icons](/foundations/iconography).',
  iconCustom: 'This is the `icon component` customized with additional `width`, `height`, `fill`, and `className` properties.'
};

const IconsPage = () => (
  <div>
    <Breadcrumb routeLocation={location.pathname} />
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Icon'
          description={description.iconDefault}
          markup={exampleIconDefaultCode}
        >
          <ExampleIconDefault />
        </CodeExample>

        <CodeExample
          title='Default Icon'
          description={description.iconCustom}
          markup={exampleIconCustomCode}
        >
          <ExampleIconCustom />
        </CodeExample>
      </div>
    </div>
  </div>
);

export default IconsPage;
