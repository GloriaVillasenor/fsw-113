// import the convertTemp.js and getDaylight.js scripts with their default export
import convertTemp from './convertTemp.js'
import getDayLight from './getDayLight.js'
// declare any variables needed
let data, city
// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener(
    "click", function () {
        weatherData ()
    }
)
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
function weatherData () {
    city = document.querySelector('#city').value
    getWeather() 
    .then (function (data) {
        weatherTemp (data)
    })
    .catch (function (err) {
        console.log(err)
    })
}
const getWeather = async () => {

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a139cf068c204cbeaf24df8a761d19ff
`)
data = await response.json()
return data
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function weatherTemp (data) {
    document.querySelector('#tempData').innerText = convertTemp (data.sys.country, data.main.temp)
    document.querySelector('#humidData').innerText = data.main.humidity
    document.querySelector('#conditionsData').innerText = data.weather[0].main
    document.querySelector('.weatherWrapper').style.backgroundColor = getDayLight(data.sys.day, data.sys.night, data.sys.newDay)
}