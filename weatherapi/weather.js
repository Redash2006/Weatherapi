const key = "0e75e24bb6cb4d85847174620252804"
const url = "http://api.weatherapi.com/v1/current.json?key=0e75e24bb6cb4d85847174620252804&q=Cairo"

// fetch the weather data from the API
async function getWeather(city) {
    const response = await fetch(`${url}?key=${key}&q=${city}`)
    const data = await response.json()
    return data
}

console.log(getWeather("Cairo"))