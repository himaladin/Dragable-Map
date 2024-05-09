var map;

function initMap() {
    var defaultLocation = { lat: 22.3038945, lng: 70.80215989999999 };

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

// Initialize the map when the page is loaded
google.maps.event.addDomListener(window, 'load', initMap);
