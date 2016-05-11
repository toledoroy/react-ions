import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Pages
import HomePage from './pages/Home/Page'
import ColorsPage from './pages/foundations/Colors/Page'
import TypographyPage from './pages/foundations/Typography/Page'
import IconographyPage from './pages/foundations/Iconography/Page'
import LayoutPage from './pages/foundations/Layout/Page'
import BreadcrumbPage from './pages/components/Breadcrumb/Page'
import ProgressBarPage from './pages/components/ProgressBar/Page'
import IconsPage from './pages/components/Icons/Page'
import ButtonsPage from './pages/components/Buttons/Page'
import NavPage from './pages/components/Nav/Page'
import CheckboxPage from './pages/components/Checkbox/Page'
import RadioGroupPage from './pages/components/RadioGroup/Page'
import TextareaPage from './pages/components/Textarea/Page'
import InputPage from './pages/components/Input/Page'
import ModalPage from './pages/components/Modal/Page'
import BadgePage from './pages/components/Badge/Page'
import ActivityFeedPage from './pages/components/ActivityFeed/Page'
import TooltipPage from './pages/components/Tooltip/Page'
import TabsPage from './pages/components/TabWrapper/Page'

const Routes = (
  <Route path='/' component={Base}>
    <IndexRoute component={HomePage} />
    <Redirect from='foundations' to='/foundations/colors' />
    <Route path='foundations' title='Foundations'>
      <Route path='colors' title='Colors' component={ColorsPage} />
      <Route path='typography' title='Typography' component={TypographyPage} />
      <Route path='iconography' title='Iconography' component={IconographyPage} />
      <Route path='layout' title='Layout' component={LayoutPage} />
    </Route>
    <Redirect from='components' to='/components/activity-feed' />
    <Route path='components' title='Components'>
      <Route path='activity-feed' title='Activity Feed' component={ActivityFeedPage} />
      <Route path='badge' title='Badge' component={BadgePage} />
      <Route path="breadcrumb" title="Breadcrumb" component={BreadcrumbPage} />
      <Route path='buttons' title='Buttons' component={ButtonsPage} />
      <Route path='checkbox' title='Checkbox' component={CheckboxPage} />
      <Route path='icons' title='Icons' component={IconsPage} />
      <Route path='input' title='Input' component={InputPage} />
      <Route path='radio' title='Radio' component={RadioGroupPage} />
      <Route path='modal' title='Modal' component={ModalPage} />
      <Route path='nav' title='Nav' component={NavPage} />
      <Route path='progress-bar' title='Progress Bar' component={ProgressBarPage} />
      <Route path='radio-group' title='Radio Group' component={RadioGroupPage} />
      <Route path='textarea' title='Textarea' component={TextareaPage} />
      <Route path='tooltip' title='Tooltip' component={TooltipPage} />
      <Route path='tabs' title='Tabs' component={TabsPage} />
    </Route>
    <Route path='patterns' title='Patterns'>
    </Route>
    <Route path='resources' title='Resources'>
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)

export default Routes;
