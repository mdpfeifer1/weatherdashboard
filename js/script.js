// openweathermap api key 875e03e498e7f171d7376399275a0e94
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=875e03e498e7f171d7376399275a0e94

 var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=875e03e498e7f171d7376399275a0e94'

 fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });