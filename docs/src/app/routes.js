import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Pages
import HomePage from './pages/HomePage'
import ColorsPage from './pages/ColorsPage'
import TypographyPage from './pages/TypographyPage'
import IconographyPage from './pages/IconographyPage'
import LayoutPage from './pages/LayoutPage'
import FirstPage from './pages/FirstPage'
import ProgressBarPage from './pages/ProgressBarPage'

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
    <Redirect from="components" to="/components/first" />
    <Route path="components" component={FirstPage}>
      <Route path="first" component={FirstPage} />
      <Route path="progress-bar" component={ProgressBarPage} />
    </Route>
  </Route>
)

export default Routes;
