// Read more button in card texts

$(".read_more_button").click(function () {
    $(this).siblings(".card-text-collapsed").toggle("slow");
});

// contact form handling

function handleSubmit(event) {
    event.preventDefault();
    //
    contactForm.submit();
}

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleSubmit);

// Nav to collapse on button link press for navbar toggler button only - to investgate as it affects web version too

/* $(".nav-link").click(function () {
    $(".navbar-toggler").click();
}); */

// navbar fades - just a nice to have play with how you can make an element fade on scroll

 $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $(".navbar").addClass("navbar-fade");
    } else {
        $(".navbar").removeClass("navbar-fade");
    }
}); 

