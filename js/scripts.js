$(function(){
	var carouselList = $('#carousel ul');
	var changeSlide = setInterval(function(){
		carouselList.animate({'marginLeft':-400}, 500,(function(){
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}));
	}, 3000);
});