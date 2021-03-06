function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude: ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less: ' + crd.accuracy + 'meters.');
}

function error(err) {
    console.warn('ERROR(' + err.code + '):' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error);
