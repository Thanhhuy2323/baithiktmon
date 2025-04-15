// JavaScript Document
//slide
$(function(){
	$('.slide').slick({
		prevArrow:$('.slide-holder .lui'),
		nextArrow:$('.slide-holder .toi'),
		autoplay:true,
		autoplaySpeed:2000,
		infinite: true		
	});
///chuyen-tab
	$('.chuyen-tab ul li').click(function(){
		var bo_li = $('.chuyen-tab ul li');
		var bo_div = $('.chuyen-tab > div')
		var n = bo_li.index($(this));
		bo_li.removeClass('tab-current').eq(n) .addClass('tab-current');
		bo_div.hide().eq(n).show();
	})
	//
})
	