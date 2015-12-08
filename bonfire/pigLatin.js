function translate (str) {
  var pigLatin = ''
  str.replace(/^([^aeiou])+/gi, function (group) {
    if (group) {
      pigLatin = str.slice(group.length, str.length) + group + 'ay'
    }
  })
  if (!pigLatin) pigLatin = str + 'way'
  return pigLatin
}

var assert = require('assert')
describe('Pig Latin', function () {
  it('should be a function', function () {
    assert(typeof translate === 'function')
  })

  it('should take the first consonant of the word and add it to the end with "ay"', function () {
    assert.equal(translate("california"), "aliforniacay")
    assert.equal(translate("paragraphs"), "aragraphspay")
    assert.equal(translate("glove"), "oveglay")
  })

  it('should only add "way" to the end of a word if it begins with a vowel', function () {
    assert.equal(translate("algorithm"), "algorithmway")
    assert.equal(translate("eight"), "eightway")
  })
})