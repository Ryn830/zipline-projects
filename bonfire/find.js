function find (arr, func) {
  return arr.filter(func).shift()
}

var test = find([1, 2, 3, 4], function(num){ return num % 6 === 0; });
console.log('test', test)

// find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.