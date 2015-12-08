function add () {
  var args = Array.prototype.slice.call(arguments)
  if (!args || typeof args[0] === 'string') return
  if (args.length >= 2) {
    return args.reduce(function (prev, curr) {
      if (typeof curr !== 'number') {
        prev = undefined
        return
      }
      return prev + curr
    }, 0)
  } else {
    return function (value) {
      if (!value || typeof value !== 'number') return
      return args[0] + value
    }
  }
}

// var test = add(2 ,3) // should return 5.
// var test = add(2)(3) //should return 5.
// var test = add("http://bit.ly/IqT6zt") //should return undefined.
// var test = add(2, "3") //should return undefined.
// var test = add(2)([3]) //should return undefined.
console.log('test', test)
