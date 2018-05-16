/$(function(){ 
	var carouselList = $('#carousel ul');
/*	var changeSlide = setInterval(function(){ 
		carouselList.animate({'marginLeft':-400}, 500,(function(){
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}));
	}, 6000); */
	$('#prev').on('click', function(event) {
	  $	carouselList.animate({'marginLeft':-400}, 500,(function(){
			var firstItem = carouselList.find('li:first');
			var lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}));
	 	/*event.preventDefault();*/
	 /*	$('li').animate({marginLeft: '400px'}, 500); */
	 	
	/*alert('You clicked the button prev!');
});
  	$('#next').on('click', function(event) {
	alert('You clicked the button next!');
});
});
*/
/*
var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);
});
$('button').click(function() {
	alert($(this).attr('data-tmp'));
});
*/

/*var list = $('li');
list.each(function(index, element) {
    var listClass = '<li class="test" data-tmp="' + index + '">';
    $(element).append(listClass);
    console.log(listClass);
});
*/
