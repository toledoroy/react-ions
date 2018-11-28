const fs = require('fs')
const pathHelper = require('path')
const folderPath = 'src'
const regex = /^(?:export (?:(?:const|class) ([^\s]+).*(?:=|{)|(default from .*)|({.*}) from .*|(.*?) from '.*'|default ([^\s{]+))|class (.*?) extends .* {)/gm
const ignoreFiles = ['src/index.js']
const fileMappings = {
  colors: {
    './components/internal/colors': 'internalColors'
  },
  styles: {
    './components/Dropdown/styles.css': 'dropdownStyles',
    './components/Popover/styles.css': 'popoverStyles',
    './components/Spinner/styles.css': 'spinnerStyles'
  }
}

// Map export names
const _mapName = (name, path) => {
  return fileMappings[name] && fileMappings[name][path] || name
}

const findExports = (file, path) => {
  if (ignoreFiles.includes(file)) return

  // Get the file contents
  const contents = fs.readFileSync(file, { encoding: 'utf8' })
  let match, fileExports = {
    default: null,
    nonDefault: []
  }

  // Adjust the file path relative to the lib folder
  path = path.replace(/^(?:\.\/|)src\/|src/, './')

  // Go through each match and save the name of the exported component/utility
  while(match = regex.exec(contents)) {
    // "export const NAME" or "export class NAME"
    if (match[1]) {
      fileExports.nonDefault.push(match[1])
    }

    // "export default from 'PATH'"
    if (match[2]) {
      fileExports.default = path.split('/').pop()
    }

    // "export { NAME_1, NAME_2 } from 'PATH'"
    if (match[3]) {
      const matchArray = match[3].replace('{', '').replace('}', '').trim().split(', ')
      fileExports.nonDefault = [...fileExports.nonDefault, ...matchArray]
    }

    // "export NAME from 'PATH'"
    if (match[4]) {
      fileExports.nonDefault.push(match[4])
    }

    // "export default NAME" or "export default connect(...)(NAME)"
    if (match[5] && !fileExports.default) {
      fileExports.default = match[5]
    }

    // "class NAME {"
    if (match[6]) {
      fileExports.default = match[6]
    }
  }

  // If one of the non-default exports is a default export as well remove it and update the saved default export
  fileExports.nonDefault.forEach((fileExport, index, allNonDefaultExports) => {
    if (fileExports.default && fileExports.default.includes(`(${fileExport})`)) {
      allNonDefaultExports.splice(index, 1)
      fileExports.default = fileExport
    }
  })

  // Map names for default and non-default exports
  fileExports.default = _mapName(fileExports.default, path)
  fileExports.nonDefault = fileExports.nonDefault.map(fileExport => _mapName(fileExport, path))

  return { [path]: fileExports }
}

const findJsFiles = (base, files, result) => {
  files = files || fs.readdirSync(base)
  result = result || { index: {}, nonIndex: {} }

  files.forEach(file => {
    const newBase = pathHelper.join(base, file)

    // If this is a folder call findJsFiles recursively
    if (fs.statSync(newBase).isDirectory() && newBase.substr(-9) !== '__tests__') {
      result = findJsFiles(newBase, fs.readdirSync(newBase), result)
    }
    else {
      // Handle index.js files
      if (file.substr(-8) === 'index.js') {
        result.index = Object.assign(result.index, findExports(newBase, base))
        const name = base.split('/').pop()
      }
      // Handle other JS files
      else if (file.substr(-3) === '.js' && !(base + '.js').includes(file) && file.substr(-8) !== '.test.js') {
        result.nonIndex = Object.assign(result.nonIndex, findExports(newBase, newBase.substr(0, newBase.length - 3)))
      }
    }
  })
  return result
}

let indexFile = []
const jsFileExports = findJsFiles(folderPath)

// Make sure the export wasn't already added
const _alreadyAdded = (path, fileExport, isDefault) => {
  const pathParts = path.split('/')
  pathParts.pop()
  const folder = pathParts.join('/')

  if (isDefault && jsFileExports.index[folder] && fileExport) {
    if (jsFileExports.index[folder].default === fileExport || jsFileExports.index[folder].nonDefault.includes(fileExport)) {
      return true
    }
  }
  if (!isDefault && jsFileExports.index[folder] && fileExport.length > 0) {
    fileExport.forEach(name => {
      if (jsFileExports.index[folder].default === name || jsFileExports.index[folder].nonDefault.includes(name)) {
        return true
      }
    })
  }

  return false
}

// Go through index exports and generage export commands
for (let path in jsFileExports.index) {
  if (jsFileExports.index[path].default) indexFile.push(`export ${jsFileExports.index[path].default} from '${path}'`)

  const filteredNonDefault = jsFileExports.index[path].nonDefault.filter(name => name !== jsFileExports.index[path].default)
  if (filteredNonDefault.length > 0) {
    indexFile.push(`export { ${filteredNonDefault.join(', ')} } from '${path}'`)
  }
}

// Go through non-index exports and generage export commands
for (let path in jsFileExports.nonIndex) {
  const pathParts = path.split('/')
  pathParts.pop()
  const folder = pathParts.join('/')

  if (!_alreadyAdded(path, jsFileExports.nonIndex[path].default, true) && jsFileExports.nonIndex[path].default) indexFile.push(`export ${jsFileExports.nonIndex[path].default} from '${path}'`)

  const filteredNonDefault = jsFileExports.nonIndex[path].nonDefault.filter(name => name !== jsFileExports.nonIndex[path].default)
  if (!_alreadyAdded(path, filteredNonDefault, false) && filteredNonDefault.length > 0) {
    indexFile.push(`export { ${jsFileExports.nonIndex[path].nonDefault.join(', ')} } from '${path}'`)
  }
}

// Write the export commands to the index.js file
fs.writeFileSync('./lib/index.js', indexFile.join('\r\n'))
