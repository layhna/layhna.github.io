//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "12 jan 2025 11:49:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	