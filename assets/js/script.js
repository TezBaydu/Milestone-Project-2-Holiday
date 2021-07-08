// Read more read less text is replaced

$(document).ready(function () {
$(".card-text").hide();
$(".read_more_button").on("click", function () {
    var txt = $(".card-text").is(':visible') ? 'Read more....' : 'Read less';
    $(".read_more_button").text(txt);
    $(this).siblings('.card-text').slideToggle(200);
});
});

// Nav to collapse on scroll down and appear on scroll up

// Hide nav on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 400);

function hasScrolled() {
    var scrollTop = $(this).scrollTop();
  
    console.log($(this));
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
        return;
    
    // If scrolled down passed navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(scrollTop + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = scrollTop;
}


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

// Navbar links to highlight when at appropriate location

$(window).on('scroll', function () {
   var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight()
    , cur_pos = $(this).scrollTop();
    sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.navbar-nav li a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});