'use strict';

var fs = require('fs');

fs.readdir('./src/components', function(err, data) {

  var components = data.filter(function(f){ return (/^[A-Z]/.test(f)); });
  var requiresList = components.map(function(f){ return 'var ' + f + ' = require(\'./components/' + f + '\');'; });
  var exportsList = components.map(function(f){ return 'exports.' + f + ' = ' + f + '.default;'; });

  // Generate master export
  var output  = '\'use strict\';';
      output += '\n';
      output += requiresList.join('\n');
      output += '\n';
      output += exportsList.join('\n');

  fs.writeFile('./lib/index.js', output);

  // Generate individual component exports
  for (var i = 0; i < requiresList.length; i++) {
    var componentOutput = requiresList[i] + exportsList[i];
    fs.writeFile('./lib/' + components[i] + '.js', componentOutput);
  }
});
