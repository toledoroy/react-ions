import React from 'react'
import { TabWrapper, Tab } from 'react-ions/lib/components/TabWrapper'
import Badge from 'react-ions/lib/components/Badge'
import classNames from 'classnames/bind'
import style from './style.scss'

class ExampleTabWrapperTitleSuffix extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cx = classNames.bind(style)
    const iconGreenClasses = cx(style['tab-suffix'], style['icon-green'])

    return (
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" count={1723} optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 1 content.</p>
          </Tab>
          <Tab
            title="Custom Bookmark"
            titleSuffix={<Badge optClass={style['tab-suffix']} theme='sky' text='5' />}
            count={50}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 2 content.</p>
          </Tab>
          <Tab
            title="Hello World"
            titleSuffix={<Badge optClass={iconGreenClasses} theme='border' icon='icon-check-1-1' />}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 3 content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperTitleSuffix
