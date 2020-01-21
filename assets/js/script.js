function start() {
    renderSearchHistory();
    $(document).on("click", ".list-group-item-action", function (event) {
        event.preventDefault();
        let pastSearchButton = $(this).text();
        displayWeatherInfo(pastSearchButton);
    })
    $(".buttonSearch").on("click", function (event) {
        event.preventDefault();
        userInput = $("#citySearch").val().trim();
        if ((userInput === null) || (userInput === "")) {
            return;
        } else {
            userCitySearches.push(userInput);
            localStorage.setItem("userInputStorage", JSON.stringify(userCitySearches));
            displayWeatherInfo(userInput);
            addPreviousSearch();
        }
    })
    $(document).on("click", ".search list-group-item list-group-item-action", displayWeatherInfo);
    $("#clearBtn").on("click", function (event) {
        event.preventDefault();
        localStorage.clear();
        document.location.reload(true);
    })
}
start();