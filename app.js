const unsplash =
  "https://api.unsplash.com/photos/random?client_id=<YOUR_KEY>";

const weather =
  "https://api.openweathermap.org/data/2.5/weather?q=riyadh&units=metric&APPID=<YOUR_KEY>";

const forismatic =
  "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

function getRandomPicture() {
  axios
    .get(unsplash)
    .then(function(response) {
      const data = response.data;
      const wallpaper = data.urls.regular;
      $("#background").css("background-image", `url('${wallpaper}')`);
    })
    .catch(function(error) {
      console.log("Got error", error);
    });
}

getRandomPicture();

function getWeather() {
  axios
    .get(weather)
    .then(function(response) {
      const data = response.data;
      $("#weather").append(`<h1>Riyadh: ${data.main.temp} &deg;</h1>`);
    })
    .catch(err => console.log(err));
}

getWeather();

function time() {
  const time = moment().format("h:mm:ss a");
  $("#time").append(`<h1>${time}</h1>`);
}

time();

function qoute() {
  axios
    .get(forismatic)
    .then(function(response) {
      const data = response.data;
      const qoute = data.quoteText;
      const author = data.quoteAuthor;

      $("#qoute").append(`<h3>Qoute: ${qoute}<br />Author: ${author}</h3>`);
    })
    .catch(err => console.log(err));
}

qoute();
