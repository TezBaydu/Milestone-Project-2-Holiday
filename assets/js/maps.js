

// Brighton co-ordinates //
let mapBrighton;

function initMapBrighton() {
  mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), {
    center: { lat: 50.82, lng: -0.135 },
    zoom: 13
  });
}

// Newquay co-ordinates //
let mapNewquay;

function initMapNewquay() {
  mapNewquay = new google.maps.Map(document.getElementById("map-newquay"), {
    center: { lat: 50.42, lng: -5.1 },
    zoom: 12
  });
}

    /* var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 51.474,
            lng: -0.069
        },
        {
            lat: 51.441,
            lng: -0.012
        },
        {
            lat: 51.466,
            lng: -0.106
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    }); */
