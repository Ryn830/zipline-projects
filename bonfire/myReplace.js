function myReplace (str, before, after) {
  return str.split(' ').reduce(function (prev, curr) {
    if (curr === before) curr = getCase(before, after)
    if (!prev) {
      return curr
    } else {
      return prev + ' ' + curr
    }
  }, '')

  function getCase (before, after) {
    if (before[0] === before[0].toUpperCase()) {
      return after[0].toUpperCase() + after.slice(1, after.length)
    }
    if (before[0] === before[0].toLowerCase()){
      return after[0].toLowerCase() + after.slice(1, after.length)     
    }
  }
}


var assert = require('assert')
describe('myReplace', function () {
  it('should be a function', function () {
    assert(typeof myReplace === 'function')
  })
  it('should replace the "before" with the "after"', function () {
    assert.equal(myReplace("A quick brown fox jumped over the lazy dog","jumped", "leaped"), "A quick brown fox leaped over the lazy dog")
    assert.equal(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall")
    assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error")
  })
  it('should preserve the case of the original when replacing', function () {
    assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch")
    assert.equal(myReplace("His name is Tom", "Tom", "john"), "His name is John")
    assert.equal(myReplace("Let us get back to more Coding", "Coding", "bonfires"), "Let us get back to more Bonfires")
  })
})
