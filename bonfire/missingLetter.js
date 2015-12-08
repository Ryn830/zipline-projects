function fearNotLetter (str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var beginning = alphabet.indexOf(str[0])
  var missing = []
  str.split('').forEach(function (letter, idx) {
    if (letter !== alphabet[beginning + idx]) {
      missing.push(alphabet[beginning + idx])
    }
  })
  return !missing ? undefined : missing.shift()
}

var assert = require('assert')
describe('fearNotLetter', function () {
  it('should be a function', function () {
    assert(typeof fearNotLetter === 'function')
  })

  it('should return a string', function () {
    assert(typeof fearNotLetter('abce') === 'string')
  })

  it('should return the missing letter between the beginning and end of the passed string', function () {
    assert.equal(fearNotLetter("abcdefghjklmno"), 'i')
    assert.equal(fearNotLetter('abce'), 'd')
  })

  it('should return "undefined" if there are no missing letters in the passed string', function () {
    assert.equal(fearNotLetter('abc'), undefined)
  })
})