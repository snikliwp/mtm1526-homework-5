// JavaScript Document
$(document).ready(function() {
	
	$('.tab-group img:not(:first-child)').hide();
		$('#tab-1').load('page1.html');

	var cache = [];
	var tabToShow;
	
	$('.tab-buttons a').on('click', function(ev) {
		tabToShow = $(this).attr('href');
		var tabNum = tabToShow.slice(5);
		if (cache[tabToShow]) {
			tabToShow.innerHTML = cache[tabToShow];
		} else {
			cache[tabToShow] = $(tabToShow).load('page'.concat(tabNum, '.html'));
			tabToShow.innerHTML = cache[tabToShow];
		}
		$('.current').removeClass('current');
		$(tabToShow).addClass('current'); 
		$(this).addClass('current'); 
	}); // end of '.tab-buttons a' function
});  // end of document ready function


