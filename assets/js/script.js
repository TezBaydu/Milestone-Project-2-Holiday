// Read more button in card texts

/* $(".read_more_button").click(function () {
    $(this).siblings(".card-text-collapsed").toggle("slow");
}); */

// Read more read less text is replaced

$(document).ready(function () {
$(".card-text").hide();
$(".read_more_button").on("click", function () {
    var txt = $(".card-text").is(':visible') ? 'Read more' : 'Read less';
    $(".read_more_button").text(txt);
    $(this).siblings('.card-text').slideToggle(200);
});
});


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


// Floating scroll to top button

let btn = $('#buttonFloat');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(top) {
  top.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});





