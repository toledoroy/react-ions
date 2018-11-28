const babel = require("babel-core")
require("babel-register")({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: [
    /node_modules/,
    /\.(css|scss)$/
  ]
})
const compiledFile = babel.transformFileSync('./src/components/Alerts/Alert.js')
// console.log(compiledFile)

const file = require('../lib/components/Alerts/Alert.js')
console.log(file)
