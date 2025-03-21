document.addEventListener("DOMContentLoaded", function () {

    const destinations = [
        {
            title: "London, England",
            description: "A hidden gem",
            image: "./",
        },
        {
            title: "Whitby, England",
            description: "Off the beaten path",
            image: "./",
        },
        {
            title: "Scarborough, England",
            description: "A hidden gem",
            image: "./",
        },
    ];

    function createLocation(location, image, description, className, titleClass, descriptionClass) {
        const div = document.createElement("div");
        div.className = className;

        const img = document.createElement("img");
        img.src = image;

        const h3 = document.createElement("h3");
        h3.className = titleClass;
        h3.textContent = location;

        const p = document.createElement("p");
        p.className = descriptionClass;
        p.textContent = description;

        const text = document.createElement("div");
        text.className = "flex flex-col gap-1";

        div.appendChild(img);
        div.appendChild(text);
        text.appendChild(h3);
        text.appendChild(p);

        return div;
    }

    const destinationContainer = document.getElementById("suggested-destinations");
    destinations.forEach(destination => {
        const location = createLocation(destination.title, destination.image, destination.description, "flex gap-2 p-2", "text-sm text-gray-900 font-medium", "text-sm text-gray-500");
        destinationContainer.appendChild(location);
    });

});