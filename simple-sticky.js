function _SetStickyMode() {
	if ( Math.floor($('#cp-by-theme').offset().top) + 80 < $(window).scrollTop() ){
    	$('#cp-menu').addClass('sticky');
  	} else {
    	$('#cp-menu').removeClass('sticky');
  	}
}
