document.getElementById("fetchBtn").onclick = function() {
    fetchDogs();
};

function fetchDogs() {
    let gallery = document.getElementById("dogGallery");
    gallery.innerHTML = ""; 

    for (let i = 0; i < 4; i++) {
        let img = document.createElement("img");
        img.src = "https://placedog.net/400/300?random=" + Math.random();
        img.alt = "Random Dog";
        gallery.appendChild(img);
    }
}
