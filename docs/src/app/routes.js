import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Pages
import ActivityFeedPage from './pages/components/ActivityFeed/Page'
import AlertsPage from './pages/components/Alerts/Page'
import BadgePage from './pages/components/Badge/Page'
import BreadcrumbPage from './pages/components/Breadcrumb/Page'
import ButtonsPage from './pages/components/Buttons/Page'
import ButtonGroupPage from './pages/components/ButtonGroup/Page'
import ColorsPage from './pages/foundations/Colors/Page'
import CheckboxPage from './pages/components/Checkbox/Page'
import DropdownPage from './pages/components/Dropdown/Page'
import HomePage from './pages/Home/Page'
import IconographyPage from './pages/foundations/Iconography/Page'
import IconsPage from './pages/components/Icons/Page'
import FormGroupPage from './pages/components/FormGroup/Page'
import LayoutPage from './pages/foundations/Layout/Page'
import TypographyPage from './pages/foundations/Typography/Page'
import NavPage from './pages/components/Nav/Page'
import RadioGroupPage from './pages/components/RadioGroup/Page'
import TextareaPage from './pages/components/Textarea/Page'
import InputPage from './pages/components/Input/Page'
import ModalPage from './pages/components/Modal/Page'
import TooltipPage from './pages/components/Tooltip/Page'
import ProgressBarPage from './pages/components/ProgressBar/Page'
import PanelGroupPage from './pages/components/PanelGroup/Page'
import SelectFieldPage from './pages/components/SelectField/Page'
import TabsPage from './pages/components/TabWrapper/Page'
import FileUploadPage from './pages/components/FileUpload/Page'
import TogglePage from './pages/components/Toggle/Page'

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
      <Route path='alerts' title='Alerts' component={AlertsPage} />
      <Route path='badge' title='Badge' component={BadgePage} />
      <Route path="breadcrumb" title="Breadcrumb" component={BreadcrumbPage} />
      <Route path='dropdown' title='Dropdown' component={DropdownPage} />
      <Route path='button-group' title='Button Group' component={ButtonGroupPage} />
      <Route path='buttons' title='Buttons' component={ButtonsPage} />
      <Route path='checkbox' title='Checkbox' component={CheckboxPage} />
      <Route path='form-group' title='Form Group' component={FormGroupPage} />
      <Route path='icons' title='Icons' component={IconsPage} />
      <Route path='input' title='Input' component={InputPage} />
      <Route path='modal' title='Modal' component={ModalPage} />
      <Route path='nav' title='Nav' component={NavPage} />
      <Route path='progress-bar' title='Progress Bar' component={ProgressBarPage} />
      <Route path='panel-group' title='Panel Group' component={PanelGroupPage} />
      <Route path='select-field' title='Select Field' component={SelectFieldPage} />
      <Route path='radio' title='Radio' component={RadioGroupPage} />
      <Route path='radio-group' title='Radio Group' component={RadioGroupPage} />
      <Route path='tabs' title='Tabs' component={TabsPage} />
      <Route path='textarea' title='Textarea' component={TextareaPage} />
      <Route path='select-field' title='Select Field' component={SelectFieldPage} />
      <Route path='tooltip' title='Tooltip' component={TooltipPage} />
      <Route path='file-upload' title='File Upload' component={FileUploadPage} />
      <Route path='toggle' title='Toggle' component={TogglePage} />
    </Route>
    <Route path='patterns' title='Patterns'>
    </Route>
    <Route path='resources' title='Resources'>
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)

export default Routes;
