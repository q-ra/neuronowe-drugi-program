fs = require('fs')
let parseToJSON = () => JSON.parse(fs.readFileSync('examples.json', 'utf-8'))

exports.getJSONWithExamples = () => parseToJSON()

exports.appendToJSON = (E, indx) => {
  //E -- obrazek, indx -- numer obrazka
  currentJSON = parseToJSON()
  currentJSON[indx] = E
  fs.writeFileSync('examples.json', JSON.stringify(currentJSON))
}
