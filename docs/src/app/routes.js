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
import ProgressBarPage from './pages/components/ProgressBar/Page'
import IconPage from './pages/components/Icons/Page'

const Routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={HomePage} />
    <Redirect from="foundations" to="/foundations/colors" />
    <Route path="foundations">
      <Route path="colors" component={ColorsPage} />
      <Route path="typography" component={TypographyPage} />
      <Route path="iconography" component={IconographyPage} />
      <Route path="layout" component={LayoutPage} />
    </Route>
    <Redirect from="components" to="/components/progress-bar" />
    <Route path="components">
      <Route path="progress-bar" component={ProgressBarPage} />
      <Route path="icons" component={IconPage} />
    </Route>
    <Route path="patterns">
    </Route>
    <Route path="resources">
    </Route>
  </Route>
)

export default Routes;
