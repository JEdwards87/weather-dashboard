let userInput;
function addPreviousSearch() {
    var btnPreviousSearch = $("<button>")
    btnPreviousSearch.addClass("search");
    btnPreviousSearch.attr("data-name", userInput);
    btnPreviousSearch.text(userInput);
    $(".previousSearchList").prepend(btnPreviousSearch);
}