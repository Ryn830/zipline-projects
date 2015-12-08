function sumPrimes (num) {
  var nums = []
  for (var i = 2; i <= num; i++) {
    nums.push(i)
  }
  return nums.reduce(function (prev, el) {
    for (var j = 2; j < el; j++) {
      if (el % j === 0) {
        return prev
      }
    }
    return prev + el
  }, 0)
}

var assert = require('assert')
describe('sumPrimes', function () {
  it('should be a function', function () {
    assert(typeof sumPrimes === 'function')
  })

  it('should return a number', function () {
    assert(typeof sumPrimes(1) === 'number')
  })

  it('should handle non-prime numbers', function () {
    assert.equal(sumPrimes(10), 17)
  })

  it('should handle prime numbers', function () {
    assert.equal(sumPrimes(977), 73156)
  })
})
