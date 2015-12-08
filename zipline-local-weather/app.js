var API_KEY = require('../config.json').API_KEY
$(document).ready(function () {
  getCoords($('.container'), getWeather)
})

function getCoords (el, callback) {
  // if (navigator) {
  //   return navigator.geolocation.getCurrentPosition(function (data) {
  //     var coords = {
  //       lat: data.coords.latitude,
  //       lon: data.coords.longitude
  //     }
  //     callback(el, coords)
  //   })
  // } else {
    var defaults = {
      lat: 37.789632990297335,
      lon: -122.40117073059082
    }
    callback(el, defaults)
  // }
}

function getWeather (el, coords) {
  $.ajax('http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&APPID=' + API_KEY)
    .done(function (data) {
      console.log('data', data)
      el.html(data.weather[0].description)
    })
}