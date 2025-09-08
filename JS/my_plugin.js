
$(document).ready(function(){
	"use strict";
	$(".header_indicators div").click(function(){
		$(".centered_text_container").animate({
			scrollTop : +500
		},500);
	});
});