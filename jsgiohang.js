// JavaScript Document
$(function(){	
		$('.max').click(function() {
			console.log('dclck');
			var a = $(this).next().val();
			a++;
			$(this).next().val(a);
		});	
		$('.min').click(function() {
			if($(this).prev().val() > 0) {
				console.log('da click');
				var a = $(this).prev().val();
				a--;
				$(this).prev().val(a);
			}
		});
		
});