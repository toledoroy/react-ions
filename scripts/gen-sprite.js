const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')
const cwd = path.join(__dirname, '/../')
const list = require('../src/assets/icons/master-list')
const normalizeIconList = require('./normalize-icon-list')

const _generatePath = list => {
  const fs = require('fs')

  fs.writeFile(`${cwd}/src/assets/icons/generated-list.js`,
    `export const paths = ${JSON.stringify(list)}`, err => {
      return err
        ? console.log(err)
        : console.log('The file was saved!')
  })
}

(function (list) {
  // Consolidate several lists of icon paths into a single list
  const normalizedList = normalizeIconList(list)

  let returnedList = []

  normalizedList.forEach(file => {
    // Load and read the file into a Cheerio object
    const $ = cheerio.load((fs.readFileSync(path.join(cwd, file.split('#')[0]), 'utf-8')))
    // The file path includes a #hashed-name which will serve as the icon name
    // so here we split the two, so we have just the name of the icon
    let name = file.split('#')[1]
    // More complex SVG's include more than one path
    // Here we check to see if there's more than one
    let length = $('svg path').length

    // If there isn't more than one path, return the "d" attribute value
    const getPath = () => length === 1
      ? $('svg path').attr('d')
      // Otherwise, map over and return them as a string separated with a |
      : $('svg path').map(function(i, el) {
          return $(this).attr('d')
        }).get().join('|')

    returnedList.push({
      name: name,
      path: getPath()
    })
  })

  return _generatePath(returnedList)
}(list))
