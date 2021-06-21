let mapBrighton;
let mapNewquay;
let mapCardigan;
let mapSkye;



function initMap(markerLocations, locationPlace) {
    mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), {
        center: { lat: 50.82, lng: -0.135 },
        zoom: 11
    });

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
        zoom: 9,
       /* disableDefaultUI: true */
});


// Object //
maps = {
    mapSkye,
    mapNewquay,
    mapCardigan,
    mapBrighton
}

// console.log(maps[locationPlace])

// Placeholder for pointer locations
if (markerLocations) {
    for (let i=0; i < markerLocations.length; i++) {
            let marker = new google.maps.Marker ({
                position: markerLocations[i].coord,
                map: maps[locationPlace],
                animation: google.maps.Animation.DROP,
            });

            // Marker info window

            const infoWindow = new google.maps.InfoWindow ({
                content: markerLocations[i].contents,
            });

            // Close previous info window

           google.maps.event.addListener(marker, 'click', function() {
                if (currentInfoWindow != null) {
                    currentInfoWindow.close();
                } 
                infoWindow.open(maps[locationPlace], marker);
                currentInfoWindow = infoWindow;
            });

            var currentInfoWindow = null;
            
        } 
} 
}

// Map marker co-ordinates

// Isle of Skye

// Activities Isle of Skye

// Event listeners for makers and call recommendation cards

document.getElementById("btn-activities").addEventListener("click",() => {
    let skyeActivityLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h4 class = "marker-head">Bella Jane</h4>
    <div class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg">
    </div>`
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h4 class = "marker-head">A.C.E Target Sports</h4>
    <div class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg">
    </div>`
    }];
    initMap(skyeActivityLocations, "mapSkye");
    skyeActivities();
});

document.getElementById("btn-restaurants").addEventListener("click",() => {
    initMap(markerLocations, "mapSkye");
    skyeRestaurants();
});

document.getElementById("btn-hotels").addEventListener("click",() => {
    initMap(markerLocations, "mapSkye");
    skyeHotels();
});


// Functions to display cards

function skyeActivities() {
    clearCards();
    document.getElementById("activities-int").style.display = "block";
}

function skyeRestaurants() {
    clearCards();
    document.getElementById("restaurants-int").style.display = "block";
}

function skyeHotels() {
    clearCards();
    document.getElementById("hotels-int").style.display = "block";
}

// Function to clear previous selection cards

function clearCards() {
    document.getElementById("activities-int").style.display ="none";
    document.getElementById("restaurants-int").style.display ="none";
    document.getElementById("hotels-int").style.display ="none";

}
