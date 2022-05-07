var inputval = document.querySelector("#cityinput");
var button = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(value) {
    return (value - 273).toFixed(2)
}
button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)

    .then(res => res.json())

    .then(data => {
            var nameval = data['name']
            var descript = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)} C</span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h</span>`
            description.innerHTML = `Sky Conditions: <span>${descript}</span>`



        })
        .catch(err => alert('You entered wrong city name'))
})