function boo (bool) {
  return typeof bool === 'boolean' ? true : false
}

var assert = require('assert')
describe('isBoolean', function () {
  it('should be a function', function () {
    assert(typeof boo === 'function')
  })

  it('should return a boolean primitive', function () {
    assert(typeof boo(true) === 'boolean')
  })

  it('should return true when the argument is a boolean primitive', function () {
    assert(boo(true))
    assert(boo(false))
  })

  it('should return false when the argument is not a boolean primitive', function () {
    assert.equal(boo([1, 2, 3]), false)
    assert.equal(boo([].slice), false)
    assert.equal(boo({ "a": 1 }), false)
    assert.equal(boo(1), false)
    assert.equal(boo(NaN), false)
    assert.equal(boo("a"), false)
  })
})