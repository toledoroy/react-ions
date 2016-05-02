// require all `test/components/**/index.js`
//const testsContext = require('./Breadcrumb.js');//, true, /\.js$/);
const testsContext = require.context('../', false, /\.js/);
testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../../src/components/', true, /(?!index).*\.js/);
//const componentsContext = require('../src/components/Breadcrumb/Breadcrumb.js');

componentsContext.keys().forEach(componentsContext);
