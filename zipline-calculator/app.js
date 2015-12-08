var stack = []
var digit = ''
var total = 0

$(document).ready(function () {
  updateDisplay('_')
})

function pushDigit (value) {
  digit += value
  updateDisplay(digit)
}

function pushOperator (operator) {
  if (operator === '=') {
    digit.length ? stack.push(parseInt(digit)) : stack.push(total)
    calculate()
  } else {
    digit.length ? stack.push(parseInt(digit), operator) : stack.push(total, operator)
    digit = ''
    updateDisplay('_')
  }
}

function updateDisplay (value) {
  var display = $('#display')
  display.html(value)
}

function seeStack () {
  console.log("digit:", digit)
  console.log('stack', stack)
  console.log('total', total)
}

function calculate () {
  if (!stack.length) return undefined
  if (typeof stack[stack.length - 1] === 'string') return NaN

  while (stack.length) {
    var item = stack.shift()
    console.log("item:", item)
    if (typeof item === 'string') {
      var next = stack.shift()
      console.log("next:", next)
      if (item === '+') {
        total = total + next
      } else if (item === '-') {
        total = total - next
      } else if (item === '*') {
        total = total * next
      } else if (item === '/') {
        total = total / next
      }
    } else if (total === 0) {
      total += item
    }
  }
  digit = ''
  updateDisplay(total)
}

function clearDisplay () {
  digit = ''
  updateDisplay('_')
}

function allClear () {
  digit = ''
  stack = []
  total = 0
  updateDisplay('_')
}
