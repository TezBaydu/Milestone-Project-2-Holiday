let mapBrighton;
let mapNewquay;
let mapCardigan;
let mapSkye;



function initMap(markerLocations, locationPlace) {
    mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), {
        center: { lat: 50.88, lng: -0.15 },
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
        lat: 50.82164,
        lng: -0.15259
    }, // I 360
    contents: `<h5 class = "marker-head">i 360<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-i360.jpg"  alt = "Brighton i 360">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://britishairwaysi360.com/">www.britishairwaysi360.com</a> </div>
    `
},
{    coord: {
        lat: 50.81957,
        lng: -0.13535
    }, // Brighton Zip
    contents: `<h5 class = "marker-head">Brighton Zipline<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-zip.jpg"  alt = "Brighton zipline">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://brightonzip.com/">www.brightonzip.com</a> </div>
    `
    },
{    coord: {
        lat: 50.819,
        lng: -0.1348
    }, // Sealife Brighton
    contents: `<h5 class = "marker-head">Sealife Brighton<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-sealife.jpg"  alt = "Brighton sealife centre">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.visitsealife.com/brighton/">www.visitsealife.com/brighton</a> </div>
    `
    },
{    coord: {
        lat: 50.82907,
        lng: -0.11290
    }, // Brighton Racecourse
    contents: `<h5 class = "marker-head">Brighton Racecourse<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-Racecourse.jpg"  alt = "Brighton racecourse">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.brighton-racecourse.co.uk/">www.brighton-racecourse.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82048,
        lng: -0.16375
    }, // Drusillas Park
    contents: `<h5 class = "marker-head">Drusillas Park<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-Drusilla.jpg"  alt = "Drusillas animal park">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.drusillas.co.uk/">www.drusillas.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82845,
        lng: -0.13906
    }, // Brighton Toy museum
    contents: `<h5 class = "marker-head">Brighton Toy museum<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-Toy.jpg"  alt = "Brighton Toy museum">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.brightontoymuseum.co.uk/">www.brightontoymuseum.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.92786,
        lng: -0.11568
    }, // Court Garden Winery
    contents: `<h5 class = "marker-head">Court Garden Winery<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-courtgarden.jpg"  alt = "Court Garden Winery">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://courtgarden.com/">www.courtgarden.com</a> </div>
    `
    },
{    coord: {
        lat: 50.81910,
        lng: -0.13648
    }, // Brighton Pier
    contents: `<h5 class = "marker-head">Brighton Pier<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-pierMarker.jpg"  alt = "Brighton zipline">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.brightonpier.co.uk/">www.brightonpier.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.81285,
        lng: -0.10166
    }, // Lure sea fishing
    contents: `<h5 class = "marker-head">Lure Sea fishing<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-Lure.jpg"  alt = "Brighton Lure sea fishing trips">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://brightonlureboat.co.uk/">www.brightonlureboat.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.83336,
        lng: -0.29117
    }, // Brighton Helifly
    contents: `<h5 class = "marker-head">Brighton Helifly<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-activity/Brighton-helifly.jpg"  alt = "Brighton Helicopter flights">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.helifly.co.uk/">www.helifly.co.uk</a> </div>
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
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(brightonRestaurantLocations, "mapBrighton");
    brightonRestaurants();
});

// Hotels for Brighton

document.getElementById("btn-brighton-hotels").addEventListener("click",() => {
    let brightonHotelLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(brightonHotelLocations, "mapBrighton");
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
    <br>
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
    <br>
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
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(newquayRestaurantLocations, "mapNewquay");
    newquayRestaurants();
});

// Hotels for Newquay

document.getElementById("btn-newquay-hotels").addEventListener("click",() => {
    let newquayHotelLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(newquayHotelLocations, "mapNewquay");
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
    <br>
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
    <br>
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
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(cardiganRestaurantLocations, "mapCardigan");
    cardiganRestaurants();
});

// Hotels for Cardigan

document.getElementById("btn-cardigan-hotels").addEventListener("click",() => {
    let cardiganHotelLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/BellaJaneActivity.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(cardiganHotelLocations, "mapCardigan");
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
        lat: 57.14817,
        lng: -6.10444
    }, // Bella Jane
    contents: `<h5 class = "marker-head">Bella Jane<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-BellaJane.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{
    coord: {
        lat: 57.23911,
        lng: -5.89486
    }, // Sea Kayak 
    contents: `<h5 class = "marker-head">Sea Kayak<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-Kayak.jpg"  alt = "Sea Kayak trip">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.seakayakplockton.co.uk/kayak-days/sea-kayak-skye/">www.seakayakplockton.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.41432,
        lng: -6.21002
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">A.C.E Target Sports<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-Ace.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <br>
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
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-Ace.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(skyeRestaurantLocations, "mapSkye");
    skyeRestaurants();
});

// Hotels for Isle of Skye

document.getElementById("btn-skye-hotels").addEventListener("click",() => {
    let skyeHotelLocations = [{
    coord: {
        lat: 57.1472,
        lng: -6.1069
    }, // Bella Jane
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-BellaJane.jpg"  alt = "Bella Jane Boat Trips">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.bellajane.co.uk/">www.bellajane.co.uk</a> </div>
    `
},
{    coord: {
        lat: 57.4038,
        lng: -6.2381
    }, // A.C.E Target Sports
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-activity/Skye-Kayak.jpg"  alt = "Ace Skye Axe throwing">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.ace-skye.com/">www.ace-skye.com</a> </div>
    `
    }];
    initMap(skyeHotelLocations, "mapSkye");
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