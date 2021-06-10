let mapBrighton;
let mapNewquay;
let mapCardigan;
let mapSkye;

function initMap() {
    mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), {
        center: { lat: 50.82, lng: -0.135 },
        zoom: 13 
    }),

    mapNewquay = new google.maps.Map(document.getElementById("map-newquay"), {
        center: { lat: 50.4168, lng: -5.09 },
        zoom: 15
});

    mapCardigan = new google.maps.Map(document.getElementById("map-cardigan"), {
        center: { lat: 52.88, lng: -4.22 },
        zoom: 11
});

    mapSkye = new google.maps.Map(document.getElementById("map-skye"), {
        center: { lat: 57.26, lng: -6.32 },
        zoom: 11
});

}

        
// Part of solution showing both maps but not two different location points
/* mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), myMaps);

mapNewquay = new google.maps.Map(document.getElementById("map-newquay"),myMaps);
} */

// Initial map solution but only display 1 map at a time

// Brighton co-ordinates //
/* let mapBrighton;

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
} */

// Placeholder for pointer locations

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
