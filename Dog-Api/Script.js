const dogGallery = document.getElementById('dogGallery')

function fetchDogs() {
    dogGallery.innerHTML = ''
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => displayDogImage(data.message))
        .catch(error => console.error("Error fetching dog image:", error))
}

function displayDogImage(url) {
    const dogCard = document.createElement('div')
    dogCard.className = 'dog-card'

    const img = document.createElement('img')
    img.src = url

    dogCard.appendChild(img)
    dogGallery.appendChild(dogCard)
}
