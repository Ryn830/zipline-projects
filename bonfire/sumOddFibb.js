function sumFibs (num) {
  var sum = 1
  var fibbs = [ 0, 1 ]
  while (num > fibbs[fibbs.length - 1]) {
    fibbs.push(fibbs[fibbs.length - 2] + fibbs[fibbs.length - 1])
    if (fibbs[fibbs.length - 1] % 2 !== 0 && fibbs[fibbs.length - 1] <= num) sum += fibbs[fibbs.length - 1]
  }
  return sum
}

var assert = require('assert')
describe('sumFibs', function () {
  it('should be a function', function () {
    assert(typeof sumFibs === 'function')
  })

  it('should return a number', function () {
    assert(typeof sumFibs(1) === 'number')
  })

  it('should sum all the odd Fibonacci numbers below the argument', function () {
    assert.equal(sumFibs(1000), 1785)
    assert.equal(sumFibs(4000000), 4613732)
    assert.equal(sumFibs(4), 5)
    assert.equal(sumFibs(75024), 60696)
    assert.equal(sumFibs(75025), 135721)
  })
})
