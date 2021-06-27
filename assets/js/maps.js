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
        zoom: 9
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

// Brighton

// Activities Brighton

document.getElementById("btn-brighton-activities").addEventListener("click",() => {
    let brightonActivityLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">Bella Jane<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">A.C.E Target Sports<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(brightonActivityLocations, "mapBrighton");
    brightonActivities();
});

// Restaurants for Brighton

document.getElementById("btn-brighton-restaurants").addEventListener("click",() => {
    let brightonRestaurantLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(brightonRestaurantLocations, "mapBrighton");
    brightonRestaurants();
});

// Hotels for Brighton

document.getElementById("btn-brighton-hotels").addEventListener("click",() => {
    let brightonRestaurantLocations = [{}];
    initMap(brightonRestaurantLocations, "mapBrighton");
    brightonHotels();
});


// Functions to display cards

// Brighton disply cards

function brightonActivities() {
    clearBrightonCards();
    document.getElementById("brighton-activities-int").style.display = "block";
}

function brightonRestaurants() {
    clearBrightonCards();
    document.getElementById("brighton-restaurants-int").style.display = "block";
}

function brightonHotels() {
    clearBrightonCards();
    document.getElementById("brighton-hotels-int").style.display = "block";
}

// Function to clear previous selection cards

// Brighton cards to clear

function clearBrightonCards() {
    document.getElementById("brighton-activities-int").style.display ="none";
    document.getElementById("brighton-restaurants-int").style.display ="none";
    document.getElementById("brighton-hotels-int").style.display ="none";

}

// Newquay

// Activities Newquay

document.getElementById("btn-newquay-activities").addEventListener("click",() => {
    let newquayActivityLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">Bella Jane<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">A.C.E Target Sports<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(newquayActivityLocations, "mapNewquay");
    newquayActivities();
});

// Restaurants for Newquay

document.getElementById("btn-newquay-restaurants").addEventListener("click",() => {
    let newquayRestaurantLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(newquayRestaurantLocations, "mapNewquay");
    newquayRestaurants();
});

// Hotels for Newquay

document.getElementById("btn-newquay-hotels").addEventListener("click",() => {
    let newquayRestaurantLocations = [{}];
    initMap(newquayRestaurantLocations, "mapNewquay");
    newquayHotels();
});


// Functions to display cards

// Newquay disply cards

function newquayActivities() {
    clearNewquayCards();
    document.getElementById("newquay-activities-int").style.display = "block";
}

function newquayRestaurants() {
    clearNewquayCards();
    document.getElementById("newquay-restaurants-int").style.display = "block";
}

function newquayHotels() {
    clearNewquayCards();
    document.getElementById("newquay-hotels-int").style.display = "block";
}

// Function to clear previous selection cards

// Newquay cards to clear

function clearNewquayCards() {
    document.getElementById("newquay-activities-int").style.display ="none";
    document.getElementById("newquay-restaurants-int").style.display ="none";
    document.getElementById("newquay-hotels-int").style.display ="none";

}

// Cardigan

// Activities Cardigan

document.getElementById("btn-cardigan-activities").addEventListener("click",() => {
    let cardiganActivityLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">Bella Jane<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">A.C.E Target Sports<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(cardiganActivityLocations, "mapCardigan");
    cardiganActivities();
});

// Restaurants for Cardigan

document.getElementById("btn-cardigan-restaurants").addEventListener("click",() => {
    let cardiganRestaurantLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(cardiganRestaurantLocations, "mapCardigan");
    cardiganRestaurants();
});

// Hotels for Cardigan

document.getElementById("btn-cardigan-hotels").addEventListener("click",() => {
    let cardiganRestaurantLocations = [{}];
    initMap(cardiganRestaurantLocations, "mapCardigan");
    cardiganHotels();
});


// Functions to display cards

// Cardigan disply cards

function cardiganActivities() {
    clearCardiganCards();
    document.getElementById("cardigan-activities-int").style.display = "block";
}

function cardiganRestaurants() {
    clearCardiganCards();
    document.getElementById("cardigan-restaurants-int").style.display = "block";
}

function cardiganHotels() {
    clearCardiganCards();
    document.getElementById("cardigan-hotels-int").style.display = "block";
}

// Function to clear previous selection cards

// Cardigan cards to clear

function clearCardiganCards() {
    document.getElementById("cardigan-activities-int").style.display ="none";
    document.getElementById("cardigan-restaurants-int").style.display ="none";
    document.getElementById("cardigan-hotels-int").style.display ="none";

}


// Isle of Skye

// Activities Isle of Skye

document.getElementById("btn-skye-activities").addEventListener("click",() => {
    let skyeActivityLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">Bella Jane<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">A.C.E Target Sports<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(skyeActivityLocations, "mapSkye");
    skyeActivities();
});

// Restaurants for Isle of Skye

document.getElementById("btn-skye-restaurants").addEventListener("click",() => {
    let skyeRestaurantLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/Ace-Skye.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(skyeRestaurantLocations, "mapSkye");
    skyeRestaurants();
});

// Hotels for Isle of Skye

document.getElementById("btn-skye-hotels").addEventListener("click",() => {
    let skyeRestaurantLocations = [{}];
    initMap(skyeRestaurantLocations, "mapSkye");
    skyeHotels();
});


// Functions to display cards

// Skye display cards

function skyeActivities() {
    clearSkyeCards();
    document.getElementById("skye-activities-int").style.display = "block";
}

function skyeRestaurants() {
    clearSkyeCards();
    document.getElementById("skye-restaurants-int").style.display = "block";
}

function skyeHotels() {
    clearSkyeCards();
    document.getElementById("skye-hotels-int").style.display = "block";
}

// Function to clear previous selection cards

// Skye cards to clear

function clearSkyeCards() {
    document.getElementById("skye-activities-int").style.display ="none";
    document.getElementById("skye-restaurants-int").style.display ="none";
    document.getElementById("skye-hotels-int").style.display ="none";

}