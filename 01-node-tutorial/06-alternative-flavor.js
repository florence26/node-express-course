module.exports.items = ['item1', 'item2']
const item = ['itemA', 'itemB']
const person = {
  name: 'bob',
}

module.exports.singlePerson = person

// module.exports = person
// same as module.exports = person
// but when running module.exports = person, it ignores module.exports.items

module.exports = {item, person}
// but can run the function above to deal with that