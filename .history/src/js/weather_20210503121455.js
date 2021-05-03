function success(pos) {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + pos.coords.latitude + "&log=" + pos.coords.longitude + "&appid=" + API_KEY;

    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude: ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less: ' + crd.accuracy + 'meters.');
}

function error(err) {
    console.warn('ERROR(' + err.code + '):' + err.message);
}
 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}
