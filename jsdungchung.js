// JavaScript Document
$(function(){
	'use strict';
//mobile menu
	$('#toggle-menu').click(function(){
		$('#toggle-menu').toggleClass('xoay');
		$('nav#the-menu, #overlay-page').toggleClass('show');
	});
	$('#overlay-page').click(function(){
		$('#toggle-menu').removeClass('xoay');
		$('nav#the-menu, #overlay-page').removeClass('show');
	});
	//co gian menu
	$('nav#the-menu ul >li > a[href="#"]').click(function(){
		$('nav#the-menu ul >li > ul').not($(this).next()).slideUp();
		$(this).next().slideToggle();
		$('nav#the-menu ul >li > a[href="#"]').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		
	})
});