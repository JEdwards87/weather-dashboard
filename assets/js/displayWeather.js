function displayWeather(response) {
    let cityP = $("<p>").text(response.data.name + " (Today)");
    let temperatureP = $("<p>").text("Temperature: " + response.data.main.temp + " ℉");
    let humidityP = $("<p>").text("Humidity: " + response.data.main.humidity + "%");
    let windSpeedP = $("<p>").text("Wind Speed: " + response.data.wind.speed + " MPH");
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    console.log(latitude, longitude);
    let uviURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + APIKey + "&lat=" + latitude + "&lon=" + longitude + "&cnt=5"
    console.log(uviURL);
    axios.get(uviURL)
        .then(function (response) {
            let uvIndexP = ("UV Index: " + response.data[0].value);
            console.log(uvIndexP);
            $('#uvIndex').empty();
            $('#uvIndex').append(uvIndexP);
        })
    $("#cityName").empty();
    $("#temperature").empty();
    $("#humidity").empty();
    $("#windSpeed").empty();
    $("#cityName").append(cityP);
    $("#temperature").append(temperatureP);
    $("#humidity").append(humidityP);
    $("#windSpeed").append(windSpeedP); 
}