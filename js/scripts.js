$(function(){
	var carouselList = $('#carousel ul');
	var animationInterval = 3000;
	var changeSlide = setInterval(animateSlide, animationInterval);
	var animationDuration = 500;
	function animateSlide() {
		carouselList.animate({'marginLeft':-400}, animationDuration,moveFirstSlide());
	}	
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	function changeSlide() {
		clearInterval(intervalId);
		carouselList.animate({'marginLeft':-400}, animationDuration,moveLastSlide());
		intevalId = setInterval(animateSlide,animationInterval);
	}
	function changeSlideBack() {
		clearInterval(intervalId);
		carouselList.animate({'marginLeft':400}, animationDuration,moveFirstSlide());
		intevalId = setInterval(animateSlide,animationInterval);
	}
	var interavlId = setInterval(changeSlide, animationInterval);
	$("#btn next").click(function() {
		changeSlide();
	})
	$("#btn prev").click(function() {
		changeSlideBack();
	})
	$(".dot").click(function(event) {
		var currentButton = $(event.currentTarget);
		var clickedSlide = currentButton.data("slide");
		$(".dot").removeClass("active");
		currentButton.addClass("active");
		
		var firstItem = carouselList.find("li:first");
		var currentSlide = firstItem.data()
		if (clickedSlide < currentSlide)
		var slideCount = clickedSlide - currentSlide;
		for (var i = 0; i<slideCount; i++) { 
			changeSlideBack();
			changeSlide();
		}
		else if (clickedSlide > currentSlide) {
		var slideCount = clickedSlide - currentSlide;
		}
		for (var i = 0; i < slideCount) {
		changeSlide();
		}
	});	
});
