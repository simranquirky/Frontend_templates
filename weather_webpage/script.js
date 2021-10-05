const apiKey = "9249c8c70184d61df01ae06d3bda45a6";



// city.oninput = (() => {
//     let value = city.value;
//     cityOutput.textContent = value;
//   });

function weather() {
    let temp = document.getElementById('temp')
    let humidity = document.getElementById('humidity')
    let wind = document.getElementById('wind')
    let description = document.getElementById('description')
    let pressure = document.getElementById('pressure')
    let icon = document.querySelector(".icon")
    let country = document.getElementById('country')
    let latitude = document.getElementById('lat')
    let longitude = document.getElementById('longi')

    var city = document.getElementById('searchInput').value;
    var cityOutput = document.getElementById('cityOutput');

    var firstLetter = city.toUpperCase();

    cityOutput.innerText = firstLetter.slice(0, 1) + city.substring(1) + ', ';

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&appid=" +
    apiKey).then((response) => response.json())
    .then((data) => (
        temp.innerText= (data.main.temp).toFixed(0) + '°',
        humidity.innerText = (data.main.humidity) + '%',
        wind.innerText = (data.wind.speed) + ' km/hr',
        description.innerText = (data.weather[0].description),
        document.querySelector('.icon').style.display = "block",
        icon.src = "https://openweathermap.org/img/wn/" + (data.weather[0].icon) + ".png",
        pressure.innerText = (data.main.pressure) + ' mb',
        country.innerText = (data.sys.country),
        latitude.innerText = (data.coord.lat) + '° N ,',
        longitude.innerText = (data.coord.lon) + '° E'
    ))
}

document.getElementById('searchInput').addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
      weather();
    }
  });

// pressure, coordinates, country, 
