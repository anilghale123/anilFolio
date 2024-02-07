jQuery.noConflict();

jQuery(document).ready(function($) {
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        console.log('Toggled class');
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
});


$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('body').addClass('no-scroll'); // Add no-scroll class to body
        $('.menu').addClass('active');
        $('.close-btn').addClass('active');
    });

    $('.close-btn').click(function(){
        $('body').removeClass('no-scroll'); // Remove no-scroll class from body
        $('.menu').removeClass('active');
        $('.close-btn').removeClass('active');
    });
});
