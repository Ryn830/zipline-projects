// Roman Numeral Converter
function convert(num) {
  return translate(makePlaces(num))
  function makePlaces (num) {
    var divisors = [ 1000, 100, 10, 1 ]
    var places = []
    divisors.forEach(function (divisor) {
      if (num / divisor >= 1) {
        places.push(Math.floor(num / divisor))
        num = num - (Math.floor(num / divisor) * divisor)
      } else {
        places.push(0)
      }
    })
    return places
  }

  function translate (places) {
    var sets = [['M'], ['C','D','M'], ['X','L','C'], ['I','V','X']]
    var ciper = {
      0: [0, 0, 0],
      1: [1, 0, 0],
      2: [2, 0, 0],
      3: [3, 0, 0],
      4: [-1, 1, 0],
      5: [0, 1, 0],
      6: [1, 1, 0],
      7: [2, 1, 0],
      8: [3, 1, 0],
      9: [-1, 0, 1]
    }

    var translated = places.map(function (value, idx) {
      if (idx === 0 && places[idx] > 3) throw 'Number is too large to convert.'
      return ciper[value]
    })

    return translated.map(function (digits, place) {
      var letters = digits.map(function (value, idx) {
        if (!value) return ''
        return makeLetters(value, sets[place][idx])
      })
      if (letters[1] || letters[2]) {
        var low = letters.shift()
        letters.push(low)
      }
      return swap(letters.join(''))
    }).join('')

    function swap (letters) {
      var str = letters.split('')
      for (var i = 0; i < str.length; i++) {
        if (str[i] === '-') {
          var tmp = str[i + 1]
          str[i + 1] = str[i - 1]
          str[i - 1] = tmp
          str[i] = ''
        }
      }
      return str.join('')
    }

    function makeLetters (value, letter) {
      var str = ''
      if (value === -1) return '-' + letter
      for (var i = 0; i < value; i++) {
        str += letter
      }
      return str
    }
  }
}

console.log(convert(97))