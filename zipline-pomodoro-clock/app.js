$(function () {

  var started, breakStarted, interval, duration
  var defaultTime = 25 * 60 * 1000
  var defaultBreak = 10 * 60 * 1000

  updateCountdown(defaultTime)

  function updateCountdown (timeleft) {
    $('#countdown').html(calculateTime(timeleft))
    function calculateTime (time) {
      var total = time / 1000 
      var secs = total % 60
      var mins = Math.floor(total / 60)
      return mins + ":" + secs
    }
  }

  function endTimer () {
    if (!breakStarted) {
      alert('Break Time')
      breakStarted = true
      beginBreak(defaultBreak)
    } else if (breakStarted) {
      clearInterval(interval)
      breakStarted = false
      updateCountdown(defaultTime)
      alert('Pomodoro Finished')
    }
  }

  function beginBreak (duration) {
    updateCountdown(duration)
    interval = setInterval(function () {
      duration -= 1000
      updateCountdown(duration)
      if (!duration) {
        clearInterval(interval)
        endTimer()
      }
    }, 1000)
  }

  function beginTimer (duration) {
    interval = setInterval(function () {
      duration -= 1000
      updateCountdown(duration)
      if (!duration) {
        duration = defaultTime
        started = false
        updateCountdown(duration)
        clearInterval(interval)
        endTimer()
      }
    }, 1000)    
  }

  var button = $('#toggleTimer')
  button.click(function () {
    button.html('Reset')
    if (!started && !breakStarted) {
      started = true
      beginTimer(defaultTime)
    } else if (breakStarted) {
      resetTimer()
      breakStarted = false
    } else {
      resetTimer()
      started = false
    }

    function resetTimer () {
      button.html('Start')
      clearInterval(interval)
      updateCountdown(defaultTime)      
    }
  })
})
