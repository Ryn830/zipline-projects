function drop (arr, func) {
  var endDrop = arr.indexOf(arr.filter(func)[0])
  if (endDrop === -1) return []
  if (endDrop || endDrop === 0) {
    return arr.slice(endDrop, arr.length)
  } else { 
    return []
  }
}

// function (el) {
//     return !!func(el)
//   }

// var test = drop([1, 2, 3, 4], function(n) {return n >= 3;}) // [3, 4].
// var test = drop([1, 2, 3], function(n) {return n > 0;}) // [1, 2, 3].
// var test = drop([1, 2, 3, 4], function(n) {return n > 5;}) // [].
// var test = drop([1, 2, 3, 7, 4], function(n) {return n > 3;}) // [7, 4].
// var test = drop([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [3, 9, 2].

console.log('test', test)
