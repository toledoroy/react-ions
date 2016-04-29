import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Nav/Nav';
import CodeExample from 'private/modules/CodeExample'
import ExampleNavDefault from './ExampleNavDefault'
import exampleNavDefaultCode from '!raw!./ExampleNavDefault'
import style from 'private/css/content'

const description = {
  navDefault: 'This is the `nav component` with an optional `icon` and an `external link`. This nav was designed to be used with `React Router`, however you could use it as a standalone navigation as well by using `external` links for all items. It takes an `array` of objects, each with a required `name` and `route`, and an optional `icon` and `external`.'
};

const NavPage = (props) => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.block}>
          <CodeExample
            title='Nav Example'
            description={description.navDefault}
            markup={exampleNavDefaultCode}
          >
            <ExampleNavDefault />
          </CodeExample>
        </div>
        <div className={style.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  )
}

export default NavPage;
