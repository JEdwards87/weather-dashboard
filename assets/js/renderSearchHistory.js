let userCitySearches = [];
    userCitySearches = localStorage.getItem("userInputStorage");
    userCitySearches = JSON.parse(userCitySearches) || [];    
function renderSearchHistory() {
    console.log(userCitySearches);
    for (let i = 0; i < userCitySearches.length; i++) {
        let button = $("<button>");
        button.addClass("search list-group-item list-group-item-action");
        button.text(userCitySearches[i]);
        $(".previousSearchList").prepend(button);
    }
}