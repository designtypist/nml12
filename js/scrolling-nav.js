//jQuery to collapse the navbar on scroll

//scrolling function
$(window).scroll(function() {
    //hide or display a background color of navbar after scrolling the page
    if ($("header#fh5co-header-section").offset().top > 92.8) {
        $("#fh5co-header-section").addClass("top-nav-collapse");
        $('#bgvid').get(0).pause();
    } else {
        $("#fh5co-header-section").removeClass("top-nav-collapse");
    }
    
    //pause or play a video past the intro section threshold
    if($("header#fh5co-header-section").offset().top > 800) {
        $('#bgvid').get(0).pause();
    } else {
        $('#bgvid').get(0).play();
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
