function success(pos) {
    const API_KEY = '325ca43691c7a61a681c3a688920ba60';
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&log=" + pos.coords.longitude + "&appid=" + API_KEY + '&units=metric';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector("#city").textContent = data.name;
            document.querySelector("#temp").textContent = data.main.temp + "&deg'C";
            document.querySelector("#main").textContent = data.weather[0].main;
            document.querySelector("#desc").textContent = data.weather[0].description;

            console.log('data: ', data)
        })
}

function error(err) {
    console.warn('ERROR(' + err.code + '):' + err.message);
}
 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}
