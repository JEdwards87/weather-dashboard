const APIKey = "6e75f6f4f7ba056432fbf8efd5c4d29b";
function displayWeatherInfo(cityName) {
    let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        cityName + "&units=imperial&APPID=" + APIKey;
    let queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName + "&units=imperial&APPID=" + APIKey;
    axios.get(queryURL)
        .then(function (response) {
            displayWeather(response);
        });
    axios.get(forecastQueryURL)
        .then(function (response) {
            displayWeatherForecast(response);
        });
}
