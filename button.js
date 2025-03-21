const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', function () {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
});

const closeButton = document.getElementById("close-button");

closeButton.addEventListener('click', function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});