// openweathermap api key 875e03e498e7f171d7376399275a0e94
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=875e03e498e7f171d7376399275a0e94

// connect search bar to api
// populate cards with daily data
// display information to main article on right
// save user searches in a display column with tabs
// create element/appendChild
// save data to localStorage
// add click feature for search bar
// when user searches by city name
// the user is presented with information
// that is displayed in the article
// and populates the week on the cards
// push recently searched cities
// in aside

// grab search id from html
// var requestUrl = fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=875e03e498e7f171d7376399275a0e94')

var searchCity = document.querySelector("#search-form")
var searchButton = document.querySelector("#search")
var apiKey = "875e03e498e7f171d7376399275a0e94"
// var currentDay = dayjs().format("MM/DD/YYYY")
// var today = dayjs().format("MM/DD/YYYY")

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//
// https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

// var displayResults = [];

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  var cityName = document.querySelector("#search-input").value ?? "";
  // variable for api needs to be in search bar
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
  )
    .then(function (data) {
      var weatherInfo = data.json();
      weatherInfo.then((res) => {
        displayCurrentWeather(res);
        console.log(res);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

function getUser() {

}

function displayCurrentWeather(weatherData) {
  $("#main-card").empty();

  var cardHTML = $(`
    <div class="card">
         <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" class="card-img-top" alt="..." />
         <div class="card-body">
           <h5 class="card-title">${weatherData.main.temp}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
           <p class="card-text">
           </p>
           <a href="#" class="card-link">Card link</a>
           <a href="#" class="card-link">Another link</a>
         </div>
       </div>
 `);

  $("#main-card").append(cardHTML);
}

function displayFiveDayWeather(weatherDataArray) {
  $("#cards-five-day").empty();
   var currentDay = fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=' + apiKey 
  )
  for (let i = 0; i < weatherDataArray.length; i++) {
    const dayObject = weatherDataArray[i];
    var cardHTML = $(`
    <div class="col">
          <div class="card">
            <img src="$('')" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                  </p>
            </div>
          </div>
        </div>
    `);
    $("#cards-five-day").append(cardHTML);
  }
}
// displaySearchResults();
