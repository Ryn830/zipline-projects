function unite () {
  var flattened = []
  var track = {}
  Array.prototype.slice.call(arguments).forEach(function (array) {
    flattened = flattened.concat(array)
  })
  return flattened.reduce(function (prev, curr) {
    if (!track[curr]) {
      track[curr] = true
      prev.push(curr)
    }
    return prev
  }, [])
}

var assert = require('assert')
describe('sorted union', function () {
  it('should be a function', function () {
    assert(typeof unite === 'function')
  })

  it('should return an array', function () {
    assert(Array.isArray(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])))
  })

  it('should return the unique values found in all arrays passed as arguments', function () {
    assert.deepEqual(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4])
    assert.deepEqual(unite([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5])
    assert.deepEqual(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8])
  })

  it('should be able to accept arrays of arrays', function () {
    assert.deepEqual(unite([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]])
  })
})