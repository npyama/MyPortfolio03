/****************************************
 Contents 1stLOAD
****************************************/
/*
$(window).load(function () {
	$('#headerLogo').fadeIn(4000);
});


$(window).load(function () {
$('#headerLogo').css('opacity', 0);
$('#headerLogo').on('inview', function() {
	if (isInView) {
		if (visiblePartY == 'both') {
			$(this).stop().animate({opacity:1}, 300);
		}
	}
	else {
		$(this).stop().animate({opacity: 0}, 300);
	}
});
});
*/


$(function(){

/****************************************
	hidden URL bar
****************************************/
setTimeout(function(){  window.scrollTo(0,1);},1000); 
$(function(){
	window.scrollTo(0,1);
});



/****************************************
	タップ判定
****************************************/
$('.contentsBtn').click(function() {
	$(this).animate({ 
	opacity: '0.7'
	}, { duration:200, easing: 'linear', });
	$(this).animate({ 
	opacity: '1'
	}, { duration:200, easing: 'linear', });

});


});





