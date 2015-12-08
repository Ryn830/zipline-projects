function steamroller (array) {
  var output = []
  unpack(array)
  return output
  function unpack (arr) {
    arr.forEach(function (value) {
      if (!Array.isArray(value)) {
        output.push(value)
        return
      }
      unpack(value)
    })
  }
}

// steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

// var test = steamroller([1, [2], [3, [[4]]]])
var test = unmap([1, {}, [3, [[4]]]])
console.log('test', test)
