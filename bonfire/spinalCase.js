function spinalCase (str) {
  var converted =  str.split(/ |_/).map(function (word, idx) {
    if (word[0] === word[0].toLowerCase() && idx) return '-' + word
    return word.replace(/[A-Z]+/g, function (match) {
      return '-' + match.toLowerCase()
    })
  }).join('')
  if (converted[0] === '-') return converted.slice(1)
  return converted 
}

var assert = require('assert')
describe('spinal case', function () {
  it('should be a function', function () {
    assert(typeof spinalCase === 'function')
  })

  it('should return a string', function () {
    assert(typeof spinalCase('This Is Spinal Tap') === 'string')
  })

  it('should return a string where all the letters are lower case', function () {
    assert.equal(spinalCase('STRINGS!'), 'strings!')
  })

  it('should convert spaces to dashes', function () {
    assert.equal(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap") 
  })

  it('should convert camel case correctly', function () {
    assert.equal(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap")
  })

  it('should convert "_" to dashes', function () {
    assert.equal(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show")
  })

  it('should not affect dashes already present in the string', function () {
    assert.equal(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh")
  })
})


