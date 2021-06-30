let mapBrighton;
let mapNewquay;
let mapCardigan;
let mapSkye;



function initMap(markerLocations, locationPlace) {
    mapBrighton = new google.maps.Map(document.getElementById("map-brighton"), {
        center: { lat: 50.83, lng: -0.15 },
        zoom: 13
    });

    mapNewquay = new google.maps.Map(document.getElementById("map-newquay"), {
        center: { lat: 50.4168, lng: -5.09 },
        zoom: 15
});

    mapCardigan = new google.maps.Map(document.getElementById("map-cardigan"), {
        center: { lat: 52.22, lng: -4.51488 },
        zoom: 9
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
        lat: 50.82515,
        lng: -0.15338
    }, // Baqueano
    contents: `<h5 class = "marker-head">Baqueano<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Baqueano.png"  alt = "Baqueano restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.baqueano.co.uk/">www.baqueano.co.uk</a> </div>
    `
},
{    coord: {
        lat: 50.82720,
        lng: -0.13695
    }, // Isaac
    contents: `<h5 class = "marker-head">Isaac<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Isaac.jpg"  alt = "Isaac restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.isaac-at.com/">www.isaac-at.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82716,
        lng: -0.16765
    }, // Wildflor
    contents: `<h5 class = "marker-head">Wildflor<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Wildflor.jpg"  alt = "Wildflor restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.wildflor.com/">www.wildflor.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82845,
        lng: -0.17747
    }, // Etchfood
    contents: `<h5 class = "marker-head">Etchfood<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Etch.jpg"  alt = "Etchfood restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.etchfood.co.uk/">www.etchfood.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82040,
        lng: -0.13909
    }, // Terreaterre
    contents: `<h5 class = "marker-head">Terreaterre<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Terraterre.jpg"  alt = "Terreaterre restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://terreaterre.co.uk/">www.terreaterre.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82500,
        lng: -0.15712
    }, // The Little Fish Market
    contents: `<h5 class = "marker-head">The Little Fish Market<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-thelittlefishmarket.jpg"  alt = "The Little Fish Market restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.thelittlefishmarket.co.uk/">www.thelittlefishmarket.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82405,
        lng: -0.15056
    }, // Bincho
    contents: `<h5 class = "marker-head">Bincho<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Bincho.jpg"  alt = "Bincho restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.binchoyakitori.com/">www.binchoyakitori.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82169,
        lng: -0.14885
    }, // Saltroom
    contents: `<h5 class = "marker-head">Saltroom<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Saltroom.jpg"  alt = "Saltroom restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.saltroom-restaurant.co.uk/">www.saltroom-restaurant.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.83259,
        lng: -0.13738
    }, // Fatto a mano
    contents: `<h5 class = "marker-head">Fatto a mano<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Fattoamano.jpg"  alt = "Fatto a mano restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.fattoamanopizza.com/">www.fattoamanopizza.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82248,
        lng: -0.14145
    }, // The Ivy Brighton
    contents: `<h5 class = "marker-head">The Ivy Brighton<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-restaurant/Brighton-Theivy.jpg"  alt = "The Ivy Brighton restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://theivybrighton.com/">www.theivybrighton.com</a> </div>
    `
    }];
    initMap(brightonRestaurantLocations, "mapBrighton");
    brightonRestaurants();
});

// Hotels for Brighton

document.getElementById("btn-brighton-hotels").addEventListener("click",() => {
    let brightonHotelLocations = [{
    coord: {
        lat: 50.819,
        lng: -0.1278
    }, // Red Brighton Blue
    contents: `<h5 class = "marker-head">Red Brighton Blue<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Redbrightonblue.jpg"  alt = "Red Brighton Blue Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.redbrightonblue.com/">www.redbrightonblue.com</a> </div>
    `
},
{    coord: {
        lat: 50.82039,
        lng: -0.13434
    }, // Brighton Wave
    contents: `<h5 class = "marker-head">Brighton Wave<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Brightonwave.jpg"  alt = "Brighton Wave Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.brightonwave.com/">www.brightonwave.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82155,
        lng: -0.14733
    }, // The Grand
    contents: `<h5 class = "marker-head">The Grand<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Thegrand.jpg"  alt = "The Grand Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.grandbrighton.co.uk/">www.grandbrighton.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82169,
        lng: -0.14885
    }, // Hilton
    contents: `<h5 class = "marker-head">Hilton Metropole Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Hilton.jpg"  alt = "Hilton Metropole Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.hilton.com/en/hotels/bshmetw-hilton-brighton-metropole/">www.hilton.com/brighton-metropole</a> </div>
    `
    },
{    coord: {
        lat: 50.81943,
        lng: -0.13070
    }, // A Room with a View
    contents: `<h5 class = "marker-head">A Room with a View<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Aroomwithaview.jpg"  alt = "A Room with a View Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.aroomwithaviewbrighton.com/">www.aroomwithaviewbrighton.com</a> </div>
    `
    },
{    coord: {
        lat: 50.81284,
        lng: -0.10219
    }, // Malmaison
    contents: `<h5 class = "marker-head">Malmaison<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Malmaison.jpg"  alt = "Malmaison Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.malmaison.com/locations/brighton/">www.malmaison.com/brighton</a> </div>
    `
    },
{    coord: {
        lat: 50.82004,
        lng: -0.13136
    }, // Sea Spray
    contents: `<h5 class = "marker-head">Sea Spray<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Seaspray.jpg"  alt = "Sea Spray Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.brightonwave.com/">www.brightonwave.com</a> </div>
    `
    },
{    coord: {
        lat: 50.82170,
        lng: -0.14219
    }, // Hotel Duvin
    contents: `<h5 class = "marker-head">Hotel Duvin<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Duvin.jpg"  alt = "Hotel Duvin">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.hotelduvin.com/locations/brighton/">www.hotelduvin.com/brighton</a> </div>
    `
    },
{    coord: {
        lat: 50.81919,
        lng: -0.12783
    }, // The 21
    contents: `<h5 class = "marker-head">The 21<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-The21.jpg"  alt = "The 21 Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://thetwentyone.co.uk/">www.thetwentyone.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.82240,
        lng: -0.14986
    }, // Hotel Una
    contents: `<h5 class = "marker-head">Hotel Una<span class = "marker-image">
    <img src="assets/images/marker-images/brighton-hotels/Brighton-Una.jpg"  alt = "Hotel Una">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.hotel-una.co.uk/">www.hotel-una.co.uk</a> </div>
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
        lat: 50.41452,
        lng: -5.07184
    }, // Newquay Zoo
    contents: `<h5 class = "marker-head">Newquay Zoo<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Zoo.jpg"  alt = "Newquay Zoo">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.newquayzoo.org.uk/">www.newquayzoo.org.uk</a> </div>
    `
},
{    coord: {
        lat: 50.41483,
        lng: -5.08373
    }, // Blue Reef Aquarium
    contents: `<h5 class = "marker-head">Blue Reef Aquarium<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Bluereef.jpg"  alt = "Blue Reef Aquarium">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.bluereefaquarium.co.uk/newquay/">www.bluereefaquarium.co.uk/newquay</a> </div>
    `
    },
{    coord: {
        lat: 50.41243,
        lng: -5.08311
    }, // Pirates Quest
    contents: `<h5 class = "marker-head">Pirates Quest<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Piratesquest.jpg"  alt = "Pirates Quest">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.piratesquest.co.uk/">www.piratesquest.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.37339,
        lng: -5.04870
    }, // Lappa Valley
    contents: `<h5 class = "marker-head">Lappa Valley<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Lappavalley.jpg"  alt = "Lappa Valley">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.lappavalley.co.uk/">www.lappavalley.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.09120,
        lng: -5.25929
    }, // Flambards
    contents: `<h5 class = "marker-head">Flambards<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Flambards.jpg"  alt = "Flambards">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.flambards.co.uk/">www.flambards.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.38349,
        lng: -5.01027
    }, // Dairyland Farm Park
    contents: `<h5 class = "marker-head">Dairyland Farm Park<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Dairyland.jpg"  alt = "Dairyland Farm Park">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://dairylandfarmpark.com/">www.dairylandfarmpark.com</a> </div>
    `
    },
{    coord: {
        lat: 50.41888,
        lng: -5.09716
    }, // Fistral Beach Surf School
    contents: `<h5 class = "marker-head">Fistral Beach Surf School<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Fistralbeachsurf.jpg"  alt = "Fistral Beach Surf School">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.fistralbeachsurfschool.co.uk/">www.fistralbeachsurfschool.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.25309,
        lng: -5.24122
    }, // Cornwall Gold
    contents: `<h5 class = "marker-head">Cornwall Gold<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Gold.jpg"  alt = "Cornwall Gold">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.cornwall-gold.com/">www.cornwall-gold.com</a> </div>
    `
    },
{    coord: {
        lat: 50.48329,
        lng: -5.01093
    }, // Cornwall Karting
    contents: `<h5 class = "marker-head">Cornwall Karting<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Kart.jpg"  alt = "Cornwall Karting">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.cornwallkarting.com/">www.cornwallkarting.com</a> </div>
    `
    },
{    coord: {
        lat: 50.41528,
        lng: -5.08693
    }, // Escape Surf School
    contents: `<h5 class = "marker-head">Escape Surf School<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-activity/Newquay-Escapesurf.jpg"  alt = "Escape Surf School">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.escapesurfschool.co.uk/">www.escapesurfschool.co.uk</a> </div>
    `
    }];
    initMap(newquayActivityLocations, "mapNewquay");
    newquayActivities();
});

// Restaurants for Newquay

document.getElementById("btn-newquay-restaurants").addEventListener("click",() => {
    let newquayRestaurantLocations = [{
    coord: {
        lat: 50.41447,
        lng: -5.08690
    }, // Bush Pepper
    contents: `<h5 class = "marker-head">Bush Pepper<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Bushpepper.jpg"  alt = "Bush Pepper Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://bushpepper.co.uk/">www.bushpepper.co.uk</a> </div>
    `
},
{    coord: {
        lat: 50.42035,
        lng: -5.09706
    }, // The Fish House
    contents: `<h5 class = "marker-head">The Fish House<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Thefishhouse.jpg"  alt = "The Fish House Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.thefishhousefistral.com/">www.thefishhousefistral.com</a> </div>
    `
    },
{    coord: {
        lat: 50.41634,
        lng: -5.08711
    }, // The Boathouse
    contents: `<h5 class = "marker-head">The Boathouse<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Theboathouse.jpg"  alt = "The Boathouse Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.the-boathouse-newquay.co.uk/">www.the-boathouse-newquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.413254,
        lng: -5.086685
    }, // Wax
    contents: `<h5 class = "marker-head">Wax<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Wax.jpg"  alt = "Wax Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://waxnewquay.co.uk/">www.waxnewquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41437,
        lng: -5.07717
    }, // The Portuguese
    contents: `<h5 class = "marker-head">The Portuguese<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Theportuguese.jpg"  alt = "The Portuguese Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.theportugueserestaurant.com/">www.theportugueserestaurant.com</a> </div>
    `
    },
{    coord: {
        lat: 50.418,
        lng: -5.097
    }, // Fistral Stable Pizza
    contents: `<h5 class = "marker-head">Fistral Stable Pizza<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Stablepizza.jpg"  alt = "Fistral Stable Pizza Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://fistral.stablepizza.com/">www.fistral.stablepizza.com</a> </div>
    `
    },
{    coord: {
        lat: 50.41578,
        lng: -5.07595
    }, // Maharajah
    contents: `<h5 class = "marker-head">Maharajah<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Maharajah.jpg"  alt = "Maharajah Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://maharajah-restaurant.co.uk/">www.maharajah-restaurant.co.uk/</a> </div>
    `
    },
{    coord: {
        lat: 50.41888,
        lng: -5.09716
    }, // Rick Stein
    contents: `<h5 class = "marker-head">Rick Stein<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Rickstein.jpg"  alt = "Rick Stein Restaurant Fistral">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.rickstein.com/restaurants/fistral/">www.rickstein.com/restaurants/fistral</a> </div>
    `
    },
{    coord: {
        lat: 50.41524,
        lng: -5.07524
    }, // Kahuna
    contents: `<h5 class = "marker-head">Kahuna<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Kahuna.jpg"  alt = "Kahuna Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.kahunarestaurant.co.uk/">www.kahunarestaurant.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41418,
        lng: -5.08085
    }, // Flounders Fish & Chips
    contents: `<h5 class = "marker-head">Flounders Fish & Chips<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-restaurant/Newquay-Flounders.jpg"  alt = "Flounders Fish & Chips Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.facebook.com/FloundersFishChips/">www.facebook.com/FloundersFishChips</a> </div>
    `
    }];
    initMap(newquayRestaurantLocations, "mapNewquay");
    newquayRestaurants();
});

// Hotels for Newquay

document.getElementById("btn-newquay-hotels").addEventListener("click",() => {
    let newquayHotelLocations = [{
    coord: {
        lat: 50.42035,
        lng: -5.09706
    }, // Headland
    contents: `<h5 class = "marker-head">Headland<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Headland.jpg"  alt = "Headland Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.headlandhotel.co.uk/">www.headlandhotel.co.uk</a> </div>
    `
},
{    coord: {
        lat: 50.41793,
        lng: -5.08814
    }, // Harbour
    contents: `<h5 class = "marker-head">Harbour<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Harbour.jpg"  alt = "Harbour Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.harbourhotel.co.uk/">www.harbourhotel.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41479,
        lng: -5.07739
    }, // Griffin Newquay
    contents: `<h5 class = "marker-head">Griffin Newquay<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Griffin.jpg"  alt = "Griffin Newquay Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://griffin-newquay.co.uk/">www.griffin-newquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.42587,
        lng: -5.05350
    }, // Porth Beach
    contents: `<h5 class = "marker-head">Porth Beach<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Porthbeach.jpg"  alt = "Porth Beach Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.porthbeachhotel.co.uk/">www.porthbeachhotel.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41919,
        lng: -5.09324
    }, // Oceanside
    contents: `<h5 class = "marker-head">Oceanside<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Oceanside.jpg"  alt = "Oceanside Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.oceansidehotel.co.uk/">www.oceansidehotel.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41219,
        lng: -5.10071
    }, // 15 Ocean Gate
    contents: `<h5 class = "marker-head">15 Ocean Gate<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-15oceangate.jpg"  alt = "15 Ocean Gate Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.15oceangate.co.uk/">www.15oceangate.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41202,
        lng: -5.10350
    }, // Esplanade
    contents: `<h5 class = "marker-head">Esplanade<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Esplanade.jpg"  alt = "Esplanade Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.esplanadehotelnewquay.co.uk/">www.esplanadehotelnewquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41936,
        lng: -5.08904
    }, // Atlantic
    contents: `<h5 class = "marker-head">Atlantic<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Atlantic.jpg"  alt = "Atlantic Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://atlantichotelnewquay.co.uk/">www.atlantichotelnewquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41508,
        lng: -5.08153
    }, // Lazy Waves
    contents: `<h5 class = "marker-head">Lazy Waves<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Lazywaves.jpg"  alt = "Lazy Waves Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.lazywavesnewquay.co.uk/">www.lazywavesnewquay.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 50.41196,
        lng: -5.08021
    }, // Glendeavour
    contents: `<h5 class = "marker-head">Glendeavour<span class = "marker-image">
    <img src="assets/images/marker-images/newquay-hotels/Newquay-Gelndeavour.jpg"  alt = "Glendeavour Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://www.glendeveornewquay.co.uk/">www.glendeveornewquay.co.uk</a> </div>
    `
    }];
    initMap(newquayHotelLocations, "mapNewquay");
    newquayHotels();
});


// Functions to display cards

// Newquay display cards

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
        lat: 52.07061,
        lng: -4.64903
    }, // Welsh Wildlife
    contents: `<h5 class = "marker-head">Welsh Wildlife<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Welshwildlife.jpg"  alt = "Welsh Wildlife">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.welshwildlife.org/">www.welshwildlife.org</a> </div>
    `
},
{    coord: {
        lat: 52.11734,
        lng: -4.68297
    }, // Cardigan Island Farm Park
    contents: `<h5 class = "marker-head">Cardigan Island Farm Park<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Islandfarm.jpg"  alt = "Cardigan Island Farm Park">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://cardiganisland.com/">www.cardiganisland.com</a> </div>
    `
    },
{    coord: {
        lat: 52.21549,
        lng: -4.35775
    }, // New Quay Boat Trips
    contents: `<h5 class = "marker-head">New Quay Boat Trips<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Newquayboat.jpg"  alt = "New Quay Boat Trips">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://newquayboattrips.co.uk/">www.newquayboattrips.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.08162,
        lng: -4.65930
    }, // Cardigan Bay Active
    contents: `<h5 class = "marker-head">Cardigan Bay Active<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Cardiganbay.jpg"  alt = "Cardigan Bay Active">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://cardiganbayactive.co.uk/">www.cardiganbayactive.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.42302,
        lng: -4.08132
    }, // Aberystwyth Cliff Railway
    contents: `<h5 class = "marker-head">Aberystwyth Cliff Railway<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Railway.jpg"  alt = "Aberystwyth Cliff Railway">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.aberystwythcliffrailway.co.uk/">www.aberystwythcliffrailway.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.06843,
        lng: -4.70339
    }, // Trenewydd Footgolf
    contents: `<h5 class = "marker-head">Trenewydd Footgolf<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Footgolf.jpg"  alt = "Trenewydd Footgolf">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.trenewydd.com/footgolf">www.trenewydd.com/footgolf</a> </div>
    `
    },
{    coord: {
        lat: 52.11392,
        lng: -4.51488
    }, // In The Welsh Wind Distillery
    contents: `<h5 class = "marker-head">In The Welsh Wind Distillery<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Welshwind.jpg"  alt = "In The Welsh Wind Distillery">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.inthewelshwind.co.uk/">www.inthewelshwind.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.11248,
        lng: -4.68377
    }, // Bay to Remember Boat Trips
    contents: `<h5 class = "marker-head">Bay to Remember Boat Trips<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Bay.jpg"  alt = "Bay to Remember Boat Trips">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.baytoremember.co.uk/">www.baytoremember.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.07061,
        lng: -4.64903
    }, // Heritage Canoes
    contents: `<h5 class = "marker-head">Heritage Canoes<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Heritage.jpg"  alt = "Heritage Canoes">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://heritagecanoes.squarespace.com/">www.heritagecanoes.squarespace.com</a> </div>
    `
    },
{    coord: {
        lat: 52.08171,
        lng: -4.66108
    }, // Cardigan Castle
    contents: `<h5 class = "marker-head">Cardigan Castle<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-activity/Cardigan-Castle.jpg"  alt = "Cardigan Castle">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.cardigancastle.com/">www.cardigancastle.com</a> </div>
    `
    }];
    initMap(cardiganActivityLocations, "mapCardigan");
    cardiganActivities();
});

// Restaurants for Cardigan

document.getElementById("btn-cardigan-restaurants").addEventListener("click",() => {
    let cardiganRestaurantLocations = [{
    coord: {
        lat: 52.08701,
        lng: -4.68221
    }, // The Ferry Inn
    contents: `<h5 class = "marker-head">The Ferry Inn<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Ferryinn.jpg"  alt = "The Ferry Inn">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.theferryinn.co.uk/">www.theferryinn.co.uk</a> </div>
    `
},
{    coord: {
        lat: 52.08347,
        lng: -4.65886
    }, // Crwst Café
    contents: `<h5 class = "marker-head">Crwst Café<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Crwst.jpg"  alt = "Crwst Café">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://crwst.cymru/">www.crwst.cymru</a> </div>
    `
    },
{    coord: {
        lat: 52.08138,
        lng: -4.66197
    }, // Pizza Tipi
    contents: `<h5 class = "marker-head">Pizza Tipi<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Pizzatipi.jpg"  alt = "Pizza Tipi">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.pizzatipi.co.uk/">www.pizzatipi.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.08217,
        lng: -4.66317
    }, // Shampan
    contents: `<h5 class = "marker-head">Shampan<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Shampan.jpg"  alt = "Shampan Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://shampancardigan.co.uk/index.html">www.shampancardigan.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.08156,
        lng: -4.66161
    }, // The Grosvenor
    contents: `<h5 class = "marker-head">The Grosvenor<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Grosvenor.jpg"  alt = "The Grosvenor">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://sites.google.com/view/the-grosvenor-cardigan/home">www.the-grosvenor-cardigan</a> </div>
    `
    },
{    coord: {
        lat: 52.08451,
        lng: -4.66047
    }, // Coffee 1
    contents: `<h5 class = "marker-head">Coffee 1<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Coffee1.jpg"  alt = "Coffee 1">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.coffee1.co.uk/locations/cardigan/">www.coffee1.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.13494,
        lng: -4.51636
    }, // The Ship Inn
    contents: `<h5 class = "marker-head">The Ship Inn<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Shipinn.jpg"  alt = "The Ship Inn">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://sabrainpubs.com/pubs-and-hotels/mid-west-wales/ceredigion/the-ship-inn">www.sabrainpubs.com</a> </div>
    `
    },
{    coord: {
        lat: 52.08217,
        lng: -4.66317
    }, // Abduls Tandoori
    contents: `<h5 class = "marker-head">Abduls Tandoori<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Abduls.jpg"  alt = "Abduls Tandoori">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.abdulstandoorispice.net/">www.abdulstandoorispice.net</a> </div>
    `
    },
{    coord: {
        lat: 52.08482,
        lng: -4.65973
    }, // The Copper Pot Restaurant
    contents: `<h5 class = "marker-head">The Copper Pot Restaurant<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-restaurant/Cardigan-Copper.jpg"  alt = "The Copper Pot Restaurant">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://m.facebook.com/profile.php?id=100063623917484&_rdr">Copperpot Facebook</a> </div>
    `
    }];
    initMap(cardiganRestaurantLocations, "mapCardigan");
    cardiganRestaurants();
});

// Hotels for Cardigan

document.getElementById("btn-cardigan-hotels").addEventListener("click",() => {
    let cardiganHotelLocations = [{
    coord: {
        lat: 52.11248,
        lng: -4.68377
    }, // The Cliff Hotel
    contents: `<h5 class = "marker-head">The Cliff Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Cliff.jpg"  alt = "The Cliff Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.cliffhotel.com/">www.cliffhotel.com</a> </div>
    `
},
{    coord: {
        lat: 52.09435,
        lng: -4.63654
    }, // Caemorgan Hotel
    contents: `<h5 class = "marker-head">Caemorgan Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Caemorgan.jpg"  alt = "Caemorgan Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.caemorgan.com/">www.caemorgan.com</a> </div>
    `
    },
{    coord: {
        lat: 52.11248,
        lng: -4.68377
    }, // Gwbert Hotel
    contents: `<h5 class = "marker-head">Gwbert Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Gwbert.jpg"  alt = "Gwbert Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://gwberthotel.com/">www.gwberthotel.com</a> </div>
    `
    },
{    coord: {
        lat: 52.03073,
        lng: -4.55199
    }, // The Nags Head Hotel
    contents: `<h5 class = "marker-head">The Nags Head Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Nags.jpg"  alt = "The Nags Head Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://nagsheadabercych.co.uk/en/home/">www.nagsheadabercych.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.01684,
        lng: -4.60563
    }, // Top of the woods Camping
    contents: `<h5 class = "marker-head">Top of the woods Camping<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Topwoods.jpg"  alt = "Top of the woods Camping">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.topofthewoods.co.uk/">www.topofthewoods.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.15906,
        lng: -4.47118
    }, // Pentre Arms Hotel
    contents: `<h5 class = "marker-head">Pentre Arms Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Pentre.jpg"  alt = "Pentre Arms Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://pentrearms.co.uk/">www.pentrearms.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.01654,
        lng: -4.83073
    }, // The Golden Lion
    contents: `<h5 class = "marker-head">The Golden Lion<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Golden.jpg"  alt = "The Golden Lion Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.goldenlionpembrokeshire.co.uk/">www.goldenlionpembrokeshire.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.01601,
        lng: -4.83251
    }, // Blas At Fronlas Hotel
    contents: `<h5 class = "marker-head">Blas At Fronlas Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Blas.jpg"  alt = "Blas At Fronlas Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "http://blasatfronlas.com/">www.blasatfronlas.com</a> </div>
    `
    },
{    coord: {
        lat: 52.01766,
        lng: -4.81314
    }, // Pembrokeshire Holiday Park
    contents: `<h5 class = "marker-head">Pembrokeshire Holiday Park<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Pembholidaypark.jpg"  alt = "Pembrokeshire Holiday Park">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://www.pembrokeshireholidaypark.co.uk/">www.pembrokeshireholidaypark.co.uk</a> </div>
    `
    },
{    coord: {
        lat: 52.06351,
        lng: -4.60205
    }, // Flambards Hotel
    contents: `<h5 class = "marker-head">Flambards Hotel<span class = "marker-image">
    <img src="assets/images/marker-images/cardigan-hotels/Cardigan-Flambards.jpg"  alt = "Flambards Hotel">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "https://flambardshotel.co.uk/">www.flambardshotel.co.uk</a> </div>
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
        lat: 0,
        lng: 0
    }, // tbc
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-restaurant/Skye-Ace.jpg"  alt = "tbc">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "tbc">tbc</a> </div>
    `
},
{    coord: {
        lat: 0,
        lng: 0
    }, // tbc
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-restaurant/Skye-Ace.jpg"  alt = "tbc">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "tbc">tbc</a> </div>
    `
    }];
    initMap(skyeRestaurantLocations, "mapSkye");
    skyeRestaurants();
});

// Hotels for Isle of Skye

document.getElementById("btn-skye-hotels").addEventListener("click",() => {
    let skyeHotelLocations = [{
    coord: {
        lat: 0,
        lng: 0
    }, // tbc
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-hotels/Skye-BellaJane.jpg"  alt = "tbc">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "tbc">tbc</a> </div>
    `
},
{    coord: {
        lat: 0,
        lng: 0
    }, // tbc
    contents: `<h5 class = "marker-head">TBC<span class = "marker-image">
    <img src="assets/images/marker-images/skye-hotels/Skye-Kayak.jpg"  alt = "tbc">
    </span></h5>
    <br>
    <div class = "info-website">Website: <a target = "_blank" href = "tbc">tbc</a> </div>
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