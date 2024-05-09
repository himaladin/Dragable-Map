var map;
var coordinates = JSON.parse(coordinates);
var apiKey = apiKey;

function initMap() {
    var defaultLocation = { lat: coordinates.lat, lng: coordinates.lng };

    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultLocation,
        zoom: 13,
        draggable: true
    });

    var marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: 'Hello World!',
        draggable: true
    });

    google.maps.event.addListener(marker, 'dragend', function(marker) {
        var latLng = marker.latLng;
        document.getElementById('lat-span').innerHTML = latLng.lat();
        document.getElementById('lon-span').innerHTML = latLng.lng();
    });
}
