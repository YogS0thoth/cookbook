$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 538) {
            $('#menu-nav').addClass('sticky');
        } else {
            $('#menu-nav').removeClass('sticky');
        }
    });
});
