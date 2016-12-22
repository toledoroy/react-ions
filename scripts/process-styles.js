var sass = require('node-sass')
var path = require('path')
var postcss = require('postcss')

module.exports = function processSass(data, filename) {
  var result
  var str

  result = sass.renderSync({
    data: data,
    file: filename
  }).css

  postcss([require('autoprefixer')])
    .process(result, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
      console.log('result', result.css)
      fs.writeFileSync('app.css', result.css)
      if ( result.map ) fs.writeFileSync('app.css.map', result.map)
  })

  return result.toString('utf8')
}
