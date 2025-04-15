// JavaScript Document
$(function(){
'use strict';
	//=======================slick slider

	 $('.slider-for').slick({
		prevArrow:$('.slide .lui'),
		nextArrow:$('.slide .toi'),
		autoplay:true,
		autoplaySpeed:2000,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: true,
	  	fade: true,
	  	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  centerMode: true,
	  focusOnSelect: true,
		arrows: false,
	});
	//xu ly size giay
	var boli_sg = $('ul.sizeday > li');
	boli_sg.click(function(){
		boli_sg.removeClass('dangchon');
		$(this).addClass('dangchon');
	});
	});