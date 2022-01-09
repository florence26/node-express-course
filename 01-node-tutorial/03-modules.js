// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
// use (../) if it is 2 levels up or (.../) if 3 levels up

const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
console.log(data)
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john) // property names with .john
sayHi(names.peter)
