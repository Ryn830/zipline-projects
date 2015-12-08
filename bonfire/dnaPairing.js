function pair (str) {
  var ciper = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A'
  }
  return str.split('').map(function (chr) {
    return [chr, ciper[chr]]
  })
}

var assert = require('assert')
describe('dna pairing', function () {
  it('should be a function', function () {
    assert(typeof pair === 'function')
  })

  it('should return an array', function () {
    assert(Array.isArray(pair('GCG')))
  })

  it('should return a pair for every element in the string', function () {
    assert(pair('GCG').length === 3)
  })

  it('should return a pair for each letter in the string', function () {
    assert.deepEqual(pair("ATCGA"), [ ["A","T"], ["T","A"], ["C","G"], ["G","C"], ["A","T"] ])
    assert.deepEqual(pair("TTGAG"), [ ["T","A"], ["T","A"], ["G","C"], ["A","T"], ["G","C"] ])
    assert.deepEqual(pair("CTCTA"), [ ["C","G"], ["T","A"], ["C","G"], ["T","A"], ["A","T"] ])
  })
})