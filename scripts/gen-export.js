const fs = require('fs')
const requireContext = require('require-context')
const jsFiles = requireContext('../../src', true, /^((?!__tests__).)*index\.js$/).keys()
const indexIndex = jsFiles.indexOf('index.js')
if (indexIndex > -1) {
  jsFiles.splice(indexIndex, 1)
}
const regex = /^(?:export default from '\.\/(.*?)'|export (.*?) from '.*')$/gm

let indexFile = []

jsFiles.forEach(file => {
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
    const defaultIndex = fileExports.default ? fileExports.nonDefault.indexOf(fileExports.default) : -1
    if (defaultIndex > -1) {
      fileExports.nonDefault.splice(defaultIndex, 1)
    }
    exportString += `${fileExports.default ? ', ' : ''}{ ${fileExports.nonDefault.join(', ')} }`
  }
  exportString += ` from './${file.replace('/index.js', '')}'`
  indexFile.push(exportString)
})

fs.writeFileSync('./src/index.js', indexFile.join('\r\n'))
