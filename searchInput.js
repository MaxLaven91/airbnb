
    const searchInput = document.querySelector("#search-input input");
    const destinationList = document.getElementById("destination-list");
    const modalContent = document.getElementById("modal-content");

    searchInput.addEventListener('focus', function () {
     destinationList.classList.remove("rounded-2xl", "mx-auto");
     destinationList.classList.add("rounded-t-2xl", "h-full", "absolute", "w-full", "top-3");

     modalContent.classList.remove("p-4");
    });

    searchInput.addEventListener('blur', function () {
        destinationList.classList.add("rounded-2xl", "mx-auto");
        destinationList.classList.remove("rounded-t-2xl", "h-full", "absolute", "w-full", "top-3");
        modalContent.classList.add("p-4");

       });