const fs = require('fs')
const requireContext = require('require-context')
const jsFiles = requireContext('../../src', true, /^((?!__tests__).)*index\.js$/)
const regex = /^(?:export default from '\.\/(.*?)'|export (.*?) from '.*')$/gm

let indexFile = []

jsFiles.keys().forEach(file => {
  let match, fileExports = {
    default: null,
    nonDefault: []
  }
  const contents = fs.readFileSync('./src/' + file, { encoding: 'utf8' })

  while(match = regex.exec(contents)) {
    // "export default from 'PATH'"
    if (match[1]) {
      fileExports.default  = match[1]
    }

    // "export NAME from 'PATH'"
    if (match[2]) {
      const matchArray = match[2].replace('{', '').replace('}', '').trim().split(', ')
      fileExports.nonDefault = [...fileExports.nonDefault, ...matchArray]
    }
  }

  let exportString = 'export '
  if (fileExports.default) {
    exportString += `${fileExports.default}`
  }
  if (fileExports.nonDefault.length > 0) {
    exportString += `${fileExports.default ? ', ' : ''}{ ${fileExports.nonDefault.join(', ')} }`
  }
  exportString += ` from './${file.replace('/index.js', '')}'`
  indexFile.push(exportString)
})

fs.writeFileSync('./src/index.js', indexFile.join('\r\n'))
