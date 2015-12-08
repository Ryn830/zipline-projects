$(document).ready(function () {
  getJoke()
})

function getJoke () {
  var joke = $("#joke")
  $.ajax("http://api.icndb.com/jokes/random")
    .done(function (data) {
      joke.html(data.value.joke)
    })
}