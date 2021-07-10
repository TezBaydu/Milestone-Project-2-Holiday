// Read more, Read less text is replaced

// Brighton card Read more, read Less function
$(document).ready(function () {
  $("#brighton-card-body .card-text").hide();
  $("#brighton-card-body .read_more_button").on("click", function () {
    var txt = $("#brighton-card-body .card-text").is(':visible') ? 'Read more....' : 'Read less';
    $("#brighton-card-body .read_more_button").text(txt);
    $(this).siblings('#brighton-card-body .card-text').slideToggle(300);
  });
});

// Newquay card Read more, read Less function
$(document).ready(function () {
  $("#newquay-card-body .card-text").hide();
  $("#newquay-card-body .read_more_button").on("click", function () {
    var txt = $("#newquay-card-body .card-text").is(':visible') ? 'Read more....' : 'Read less';
    $("#newquay-card-body .read_more_button").text(txt);
    $(this).siblings('#newquay-card-body .card-text').slideToggle(300);
  });
});

// Cardigan card Read more, read Less function
$(document).ready(function () {
  $("#cardigan-card-body .card-text").hide();
  $("#cardigan-card-body .read_more_button").on("click", function () {
    var txt = $("#cardigan-card-body .card-text").is(':visible') ? 'Read more....' : 'Read less';
    $("#cardigan-card-body .read_more_button").text(txt);
    $(this).siblings('#cardigan-card-body .card-text').slideToggle(300);
  });
});

// Skye card Read more, read Less function
$(document).ready(function () {
  $("#skye-card-body .card-text").hide();
  $("#skye-card-body .read_more_button").on("click", function () {
    var txt = $("#skye-card-body .card-text").is(':visible') ? 'Read more....' : 'Read less';
    $("#skye-card-body .read_more_button").text(txt);
    $(this).siblings('#skye-card-body .card-text').slideToggle(300);
  });
});

// Nav to collapse on scroll down and appear on scroll up

// Hide nav on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 400);

function hasScrolled() {
  var scrollTop = $(this).scrollTop();

  console.log($(this));

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

  // If scrolled down passed navbar, add class .nav-up.
  if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
    // Scroll Down
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if (scrollTop + $(window).height() < $(document).height()) {
      $('nav').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = scrollTop;
}


// Floating scroll to top button

let btn = $('#buttonFloat');

$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (top) {
  top.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '600');
});

// Navbar links to highlight when at appropriate location

var menu1 = $('#home').offset().top - 380;
var menu2 = $('#locations').offset().top - 100;
var menu3 = $('#contact-container').offset().top - 400;


$(window).scroll(function () {
  var _wscoll = $(window).scrollTop();
  console.log(_wscoll + ' ' + menu1);
  if (_wscoll >= menu1 && _wscoll < menu2) {
    $('#link1').addClass('active');
    $('#link2, #link3').removeClass('active');
  } else if (_wscoll >= menu2 && _wscoll < menu3) {
    $('#link2').addClass('active');
    $('#link1, #link3').removeClass('active');
  } else if (_wscoll >= menu2 && _wscoll > menu3) {
    $('#link3').addClass('active');
    $('#link1, #link2').removeClass('active');
  } else {
    $('#link1, #link2, #link3').removeClass('active');
  }
});