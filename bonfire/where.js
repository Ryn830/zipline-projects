function where(collection, source) {
  return collection.filter(function (obj) {
    return Object.keys(source).every(function (key) {
      return source[key] === obj[key]
    })
  })
}

console.log(
  where([{ "a": 1, "b": 2 }, 
    { "a": 1 }, 
    { "a": 1, "b": 2, "c": 2 }
  ], { "a": 1, "b": 2 })
)

console.log(
  where([{ "a": 1 }, 
    { "a": 1 }, 
    { "a": 1, "b": 2 }
  ], { "a": 1 })
)

console.log(
  where([{ first: "Romeo", last: "Montague" }, 
    { first: "Mercutio", last: null }, 
    { first: "Tybalt", last: "Capulet" }
  ], { last: "Capulet" })
)