// JavaScript Document
// simple cart demo 
;(function($) {
'use strict';
    $.simpleCart = function(options) {

        var defaults = {
            cartName: 'STSHOP_Cart_',
						theCart: [],
            onChange: function() {}
        };

        var plugin = this;

        plugin.settings = {};

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);           
        };

				////nhan gio hang
        plugin.getTheCart = function() {					
						var tmp = localStorage.getItem(
							plugin.settings.cartName + new Date().getDate());
						if (!tmp) { 
							plugin.settings.theCart = [];					 
						}
							else {
							plugin.settings.theCart = JSON.parse(tmp);
						}		
						return plugin.settings.theCart;
        };			
			  //=======================them san pham 
			plugin.addToCart = function(_id,_itemName,_imgPath, _price,_qty) {
											//addToCart(id, itemName , imgPath, price, qty);					
					var ghang = plugin.getTheCart();
					var i=0, found = false;
					while (i<ghang.length && !found) {
						if (ghang[i].id === _id) {
							found = true;
							if (_itemName) {ghang[i].itemName = _itemName;}
							if (_imgPath) {ghang[i].imgPath = _imgPath;}
							if (_price) {ghang[i].price = _price;}
							ghang[i].qty += _qty;				
						}
						i++;
					}
					if (!found) {		
							var onePro = {};
							onePro.id = _id;
							onePro.itemName = _itemName;
							onePro.imgPath = _imgPath;
							onePro.price = _price;
							onePro.qty = _qty;
							ghang.push(onePro); 												
					}
					localStorage.clear();
					localStorage.setItem(plugin.settings.cartName + new Date().getDate(),JSON.stringify(ghang));
					plugin.settings.onChange.call(this);
				};
			
			////////////////////////////////////
			plugin.updateCart = function(_id,_qty, _isMore ){
				var i=0, found = false;
				var ghang = plugin.getTheCart();
				while (i<ghang.length && !found) {
					if (ghang[i].id === _id) {
						found = true;				
						if (_isMore) {
							ghang[i].qty += _qty;
						}
						else  {
							ghang[i].qty = _qty;
						}
					}
					i++;					
				}	
				localStorage.clear();
				localStorage.setItem(plugin.settings.cartName + new Date().getDate(),JSON.stringify(ghang));
				plugin.settings.onChange.call(this);
			};
			
			///////////////////////
			plugin.deletePro = function (_id) {
				var i=0, found = false;
				var ghang = plugin.getTheCart();
				while (i<ghang.length && !found) {
					if (ghang[i].id === _id) {
						found = true;
						ghang.splice(i,1);
					}
					i++;					
				}
				localStorage.clear();
				localStorage.setItem(plugin.settings.cartName + new Date().getDate(),JSON.stringify(ghang));
				plugin.settings.onChange.call(this);
			};
			
			////////////////////		
			plugin.clearCart = function (){
				localStorage.clear();
				//location.reload();
			};
			plugin.countCart = function (){
				var ghang = plugin.getTheCart();
				var total_qty = 0;
				for (var i=0;i<ghang.length;i++){
					total_qty += ghang[i].qty;
				}
				return total_qty;
			};
			plugin.totalMoney = function () {
				var total = 0;
				var ghang = plugin.getTheCart();
				for (var i=0;i<ghang.length;i++){
					total += ghang[i].price * ghang[i].qty;
				}
				return total;				
			};
			/////////////////////
      init();

    };
})(jQuery);