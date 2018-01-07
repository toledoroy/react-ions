var SVGSpriter = require('svg-sprite');
var path = require('path');
var mkdirp = require('mkdirp');
var fs = require('fs');
var cwd = path.join(__dirname, '/../');
var dest = path.normalize(path.join(__dirname, '/../lib/assets/icons'));
var list = require('../src/assets/icons/master-list');
var normalizeIconList = require('./normalize-icon-list');

var spriter = new SVGSpriter({
  dest: dest,
  shape: {
    id: {
      generator: function(name) {
        return name.split('#')[1]
      }
    }
  }
});

/**
 * Add a bunch of SVG files
 *
 * @param {SVGSpriter} spriter        Spriter instance
 * @param {Array} files               SVG files
 * @return {SVGSpriter}               Spriter instance
 */
function addFixtureFiles(spriter, iconList) {
  iconList.forEach(function(file) {
    spriter.add(path.resolve(path.join(cwd, file)), file, fs.readFileSync(path.join(cwd, file.split('#')[0]), {
      encoding: 'utf-8'
    }));
  })
  return spriter;
}
addFixtureFiles(spriter, normalizeIconList(list)).compile({
  symbol: {
    sprite: 'sprite.svg'
  }
}, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    for (var type in result.symbol) {
      mkdirp.sync(path.dirname(result.symbol[type].path));
      fs.writeFileSync(result.symbol[type].path, result.symbol[type].contents);
    }
    console.log('Sprite file generated.');
  }
})