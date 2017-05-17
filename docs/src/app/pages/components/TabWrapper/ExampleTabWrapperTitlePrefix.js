import React from 'react'
import { TabWrapper, Tab } from 'react-ions/lib/TabWrapper'
import Badge from 'react-ions/lib/Badge'
import classNames from 'classnames/bind'
import style from './style.scss'

class ExampleTabWrapperTitlePrefix extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cx = classNames.bind(style)
    const iconGreenClasses = cx(style['tab-prefix'], style['icon-green'])

    return (
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" count={1723} optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
          <Tab
            titlePrefix={<Badge optClass={style['tab-prefix']} theme='sky' text='5' />}
            title="Custom Bookmark"
            count={50}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
          <Tab
          titlePrefix={<Badge optClass={iconGreenClasses} theme='border' icon='icon-check-1-1' />}
            title="Hello World"
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperTitlePrefix
