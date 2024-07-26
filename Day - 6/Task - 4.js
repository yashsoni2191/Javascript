function convertTemperature() {
    let temperature = document.getElementById('temperature').value
    let unit = document.getElementById('unit').value.toUpperCase()
    let convertedTemperature

    if (unit === 'C') {
        convertedTemperature = (temperature * 9 / 5) + 32
        document.getElementById('result').innerText = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`
    } else if (unit === 'F') {
        convertedTemperature = (temperature - 32) * 5 / 9
        document.getElementById('result').innerText = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`
    } else {
        document.getElementById('result').innerText = 'Please enter a valid unit (C or F).'
    }
}