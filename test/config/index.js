
// TODO: reorganize test files so that we don't need multiple context entries here
const componentTestContext = require.context('../', false, /\.js/)
// NOTE: in the interest of speed, to test an individual component, use something like this:
// const componentTestContext = require.context('../', false, /\Input.js/);

const utilityTestContext = require.context('../utilities', false, /\.js/)

componentTestContext.keys().forEach(componentTestContext)
utilityTestContext.keys().forEach(utilityTestContext)

// require all source files for code coverage
const componentsContext = require.context('../../src/components/', true, /\.js/)
const utilitiesContext = require.context('../../src/utilities/', true, /\.js/)

utilitiesContext.keys().forEach(utilitiesContext)
componentsContext.keys().forEach(componentsContext)
