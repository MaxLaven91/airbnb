document.addEventListener("DOMContentLoaded", function () {

    const destinations = [
        {
            title: "London, England",
            description: "A hidden gem",
            image: "images/london.jpg",
        },
    ];

    function createLocation(location, image, description, className) {
        const div = document.createElement("div");
        div.className = className;
        const img = document.createElement("img");
        img.src = image;
        const h3 = document.createElement("h3");
        h3.textContent = location;
        const p = document.createElement("p");
        p.textContent = description;
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        return div;
    }

    const destinationContainer = document.getElementById("suggested-destinations");
    destinations.forEach(destination => {
        const location = createLocation(destination.title, destination.image, destination.description, "flex gap-2");
        destinationContainer.appendChild(location);
    });

});