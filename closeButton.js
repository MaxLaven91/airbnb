const closeButton = document.getElementById("close-button");

closeButton.addEventListener('click', function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});