'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);

	function clickLikeBtn(){
		e.preventDefault;
		ga("create", "UA-189301975-1", "auto");
		ga("send","event","signup","click");
	}
}