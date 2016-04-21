import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Pages
import HomePage from './pages/Home/Page'
import ColorsPage from './pages/Colors/Page'
import TypographyPage from './pages/Typography/Page'
import IconographyPage from './pages/Iconography/Page'
import LayoutPage from './pages/Layout/Page'
import ProgressBarPage from './pages/ProgressBar/Page'

const Routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={HomePage} />
    <Redirect from="foundations" to="/foundations/colors" />
    <Route path="foundations" title="Foundations">
      <Route path="colors" title="Colors" component={ColorsPage} />
      <Route path="typography" title="Typography" component={TypographyPage} />
      <Route path="iconography" title="Iconography" component={IconographyPage} />
      <Route path="layout" title="Layout" component={LayoutPage} />
    </Route>
    <Redirect from="components" to="/components/progress-bar" />
    <Route path="components">
      <Route path="progress-bar" title="Progress Bar" component={ProgressBarPage} />
    </Route>
    <Route path="patterns" title="Patterns">
    </Route>
    <Route path="resources" title="Resources">
    </Route>
  </Route>
)

export default Routes;
