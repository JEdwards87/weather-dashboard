function displayWeatherForecast(response) {
    //day 1
    let dateP1 = $("<p>").text(response.data.list[3].dt_txt);
    let weatherIcon1 = response.data.list[3].weather[0].icon;
    let weatherIconImg1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon1 + "@2x.png");
    let temperatureP1 = $("<p>").text("Temp: " + response.data.list[3].main.temp + " ℉");
    let humidityP1 = $("<p>").text("Humidity: " + response.data.list[3].main.humidity + "%");
    $(".forecastDate1").empty();
    $(".weatherIcon1").empty();
    $(".tempForecast1").empty();
    $(".humidityForecast1").empty();
    $(".forecastDate1").append(dateP1);
    $(".weatherIcon1").append(weatherIconImg1);
    $(".tempForecast1").append(temperatureP1);
    $(".humidityForecast1").append(humidityP1);

    let weatherIconP = response.data.list[3].weather[0].icon;
    let weatherIconPImage = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIconP + "@2x.png");
    $("#weatherIconP").empty();
    $("#weatherIconP").append(weatherIconPImage);

    let dateP2 = $("<p>").text(response.data.list[11].dt_txt);
    let weatherIcon2 = response.data.list[11].weather[0].icon;
    let weatherIconImg2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon2 + "@2x.png");
    let temperatureP2 = $("<p>").text("Temp: " + response.data.list[11].main.temp + " ℉");
    let humidityP2 = $("<p>").text("Humidity: " + response.data.list[11].main.humidity + "%");
    $(".forecastDate2").empty();
    $(".weatherIcon2").empty();
    $(".tempForecast2").empty();
    $(".humidityForecast2").empty();
    $(".forecastDate2").append(dateP2);
    $(".weatherIcon2").append(weatherIconImg2);
    $(".tempForecast2").append(temperatureP2);
    $(".humidityForecast2").append(humidityP2);
 
    let dateP3 = $("<p>").text(response.data.list[19].dt_txt);
    let weatherIcon3 = response.data.list[19].weather[0].icon;
    let weatherIconImg3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon3 + "@2x.png");
    let temperatureP3 = $("<p>").text("Temp: " + response.data.list[19].main.temp + " ℉");
    let humidityP3 = $("<p>").text("Humidity: " + response.data.list[19].main.humidity + "%");
    $(".forecastDate3").empty();
    $(".weatherIcon3").empty();
    $(".tempForecast3").empty();
    $(".humidityForecast3").empty();
    $(".forecastDate3").append(dateP3);
    $(".weatherIcon3").append(weatherIconImg3);
    $(".tempForecast3").append(temperatureP3);
    $(".humidityForecast3").append(humidityP3);

    let dateP4 = $("<p>").text(response.data.list[27].dt_txt);
    let weatherIcon4 = response.data.list[27].weather[0].icon;
    let weatherIconImg4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon4 + "@2x.png");
    let temperatureP4 = $("<p>").text("Temp: " + response.data.list[27].main.temp + " ℉");
    let humidityP4 = $("<p>").text("Humidity: " + response.data.list[27].main.humidity + "%");
    $(".forecastDate4").empty();
    $(".weatherIcon4").empty();
    $(".tempForecast4").empty();
    $(".humidityForecast4").empty();
    $(".forecastDate4").append(dateP4);
    $(".weatherIcon4").append(weatherIconImg4);
    $(".tempForecast4").append(temperatureP4);
    $(".humidityForecast4").append(humidityP4);

    let dateP5 = $("<p>").text(response.data.list[35].dt_txt);
    let weatherIcon5 = response.data.list[35].weather[0].icon;
    let weatherIconImg5 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon5 + "@2x.png");
    let temperatureP5 = $("<p>").text("Temp: " + response.data.list[35].main.temp + " ℉");
    let humidityP5 = $("<p>").text("Humidity: " + response.data.list[35].main.humidity + "%");
    $(".forecastDate5").empty();
    $(".weatherIcon5").empty();
    $(".tempForecast5").empty();
    $(".humidityForecast5").empty();
    $(".forecastDate5").append(dateP5);
    $(".weatherIcon5").append(weatherIconImg5);
    $(".tempForecast5").append(temperatureP5);
    $(".humidityForecast5").append(humidityP5);
}