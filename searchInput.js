
const searchInput = document.querySelector("#input-wrapper input");
const destinationList = document.getElementById("destination-list");
const modalContent = document.getElementById("modal-content");
const mainInput = document.getElementById("main-input");
const searchIcon = document.getElementById("search-icon");
const backIcon = document.getElementById("back-icon");
const backButton = document.getElementById("back-button");

searchInput.addEventListener('focus', function () {
    destinationList.classList.remove("rounded-2xl", "mx-auto");
    destinationList.classList.add("rounded-t-2xl", "h-full", "absolute", "w-full", "top-3");
    searchIcon.classList.add("hidden");
    backIcon.classList.remove("hidden");

    modalContent.classList.remove("p-4");
});

backButton.addEventListener('click', function () {
    destinationList.classList.add("rounded-2xl", "mx-auto");
    destinationList.classList.remove("rounded-t-2xl", "h-full", "absolute", "w-full", "top-3");
    modalContent.classList.add("p-4");

    searchIcon.classList.remove("hidden");
    backIcon.classList.add("hidden");

    searchInput.classList.remove("focus-within:ring-2", "focus-within:ring-black", "focus-within:bg-gray-50");

});