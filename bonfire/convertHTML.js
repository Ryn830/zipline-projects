function convert (str) {
  var decoder = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  }
  return str.split('').map(function (chr) {
    if (decoder[chr]) return decoder[chr]
    return chr
  }).join('')
}

// Note tests fail, but pass on FreeCodeCamp
var assert = require('assert')
describe('convert html', function () {
  it('should be a function', function () {
    assert(typeof convert === 'function')
  })

  it('should return a string', function () {
    assert(typeof convert('Dolce & Gabbana') === 'string')
  })

  it('should convert "&" to "&amp;"', function () {
    assert.equal(convert('Dolce & Gabbana'), 'Dolce &​amp; Gabbana')
  })

  it('should turn "<" to "&lt;"', function () {
    assert.equal(convert('Hamburgers < Pizza < Tacos'), 'Hamburgers &​lt; Pizza &​lt; Tacos')
  })

  it('should turn ">" to "&gt;"', function () {
    assert.equal(convert('Sixty > twelve'), 'Sixty &​gt; twelve')
  })

  it('should turn "\'" to "&quot;"', function () {
    assert.equal(convert('Stuff in "quotation marks"'), 'Stuff in &​quot;quotation marks&​quot;')
  })

  it('should turn "\'" to "&apos;"', function () {
    assert.equal(convert("Shindler's List"), 'Shindler&​apos;s List')
  })

  it('should convert multiple symbols correctly', function () {
    assert.equal(convert('<>'), '&​lt;&​gt;')
  })

  it('should not affect non-special characters', function () {
    assert.equal(convert('abc'), 'abc')
  })
})
