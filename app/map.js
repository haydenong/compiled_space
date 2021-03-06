var markerCount = 0;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 17.277,
            lng: 121.807
        },
        zoom: 20,
        mapTypeId: 'satellite'
    });

    map.addListener('click', function (e) {
        placeMarker(e.latLng, map);
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function placeMarker(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: true
    });
    markerCount++;
    var infowindow = new google.maps.InfoWindow({
        content: String(markerCount)
    });
    infowindow.open(map, marker);
}