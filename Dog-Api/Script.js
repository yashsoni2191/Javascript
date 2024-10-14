const dogGallery = document.getElementById('dogGallery');

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogGallery.innerHTML = `
                <div class="dog-card">
                    <img src="${data.message}" alt="Random Dog">
                </div>
            `;
        })
        .catch(error => console.error("Error fetching dog image:", error));
}
