'use strict'

var fs = require('fs')

function _genComponentExport(component) {
  fs.readFile('./lib/components/' + component + '/index.js', function (error, data) {
    var componentData = data.toString().replace('./', './components/')

    fs.writeFile('./lib/' + component + '.js', componentData, function (err, result) {
      if (err) console.error('Error: ', err)
    })
  })
}

fs.readdir('./src/components', function (err, data) {
  var components = data.filter(function (f) { return (/^[A-Z]/.test(f)) })

  // Generate individual component exports
  for (var i = 0; i < components.length; i++) {
    _genComponentExport(components[i])
  }
})
