import React from 'react'
import { Route, IndexRoute } from 'react-router'

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
    <Route path="/foundations" />
      <Route path="/foundations/colors" component={ColorsPage} />
      <Route path="/foundations/typography" component={TypographyPage} />
      <Route path="/foundations/iconography" component={IconographyPage} />
      <Route path="/foundations/layout" component={LayoutPage} />
    <Route path="/components" />
      <Route path="/components/first" component={FirstPage} />
      <Route path="/components/progress-bar" component={ProgressBarPage} />
  </Route>
)

export default Routes;
