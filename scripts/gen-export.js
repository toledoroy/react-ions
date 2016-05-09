'use strict';

var fs = require('fs');

fs.readdir('./src/components', function(err, data) {

  var components = data.filter(function(f){ return (/^[A-Z]/.test(f)); });
  var requiresList = components.map(function(f){ return 'var ' + f + ' = require(\'./' + f + '\');'; });
  var exportsList = components.map(function(f){ return 'exports.' + f + ' = ' + f + '.default;'; });

  var output  = '\'use strict\';';
      output += '\n';
      output += requiresList.join('\n');
      output += '\n';
      output += exportsList.join('\n');

  fs.writeFile('./lib/index.js', output);
});
