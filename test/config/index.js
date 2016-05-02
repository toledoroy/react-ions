// require all test .js files
const testsContext = require.context('../', false, /\.js/);
testsContext.keys().forEach(testsContext);

// require all src/components .js files
const componentsContext = require.context('../../src/components/', true, /\.js/);
componentsContext.keys().forEach(componentsContext);
