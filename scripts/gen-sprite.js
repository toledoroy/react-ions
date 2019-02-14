var SVGSpriter = require('svg-sprite')
var path = require('path')
var cheerio = require('cheerio')
var fs = require('fs')
var cwd = path.join(__dirname, '/../')
var list = require('../src/assets/icons/master-list')
var normalizeIconList = require('./normalize-icon-list')

function generateFile(list) {
  const fs = require('fs')
  fs.writeFile('./src/components/Icon/generated.js', `export const paths = ${JSON.stringify(list)}`, function(err) {
    if(err) {
      return console.log(err)
    }
  
    console.log('The file was saved!')
  })
}

/**
 * Add a bunch of SVG files
 *
 * @param {SVGSpriter} spriter        Spriter instance
 * @param {Array} files               SVG files
 * @return {SVGSpriter}               Spriter instance
 */
function addFixtureFiles(iconList) {
  let normalizedList = normalizeIconList(iconList)

  let list = []

  normalizedList.forEach(file => {
    const $ = cheerio.load((fs.readFileSync(path.join(cwd, file.split('#')[0]), 'utf-8')))
    let name = file.split('#')[1]
    let length = $('svg path').length

    const getPath = () => length === 1
      ? $('svg path').attr('d')
      : $('svg path').map(function(i, el) {
          return $(this).attr('d')
        }).get().join('|')

    list.push({
      name: name,
      path: getPath()
    })    
  })

  return generateFile(list)
}

addFixtureFiles(list)