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
import FirstPage from './pages/First/Page'
import ProgressBarPage from './pages/ProgressBar/Page'

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
    <Route path="components">
      <Route path="first" component={FirstPage} />
      <Route path="progress-bar" component={ProgressBarPage} />
    </Route>
  </Route>
)

export default Routes;
