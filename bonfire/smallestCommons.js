function smallestCommons (arr) {
  var sorted =  arr.sort(function (a, b) { return a - b })
  var values = []
  for (var i = sorted[0]; i <= sorted[1]; i++) {
    values.push(i)
  }
  var largest = values.reduce(function (prev, curr) {
    return prev * curr
  }, 1)
  for (var j = 1; j <= largest; j++) {
    if (isDivisible(j, values)) {
      return j
    }
  }
  function isDivisible (num, values) {
    return values.every(function (value) {
      return num % value === 0
    })
  }
}

var assert = require('assert')
describe('smallestCommons', function () {
  it('should be a function', function () {
    assert(typeof smallestCommons === 'function')
  })

  it('should return a number', function () {
    assert(typeof smallestCommons([1, 5]) === 'number')
  })

  it('should handle unsorted arrays', function () {
    assert.equal(smallestCommons([1, 5]), 60)
    assert.equal(smallestCommons([5, 1]), 60)
  })

  it('should return the right value', function () {
    assert.equal(smallestCommons([1, 13]), 360360)
  })
})
