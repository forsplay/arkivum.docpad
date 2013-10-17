YUI().use('node', 'event', 'event-valuechange', function(Y) {
	
	function scrolledPast(){
		Y.one('.arkivum-logo-stamp').hide();
	}
	function scrolledTop(){
		Y.one('.arkivum-logo-stamp').show();
	}

	function scrollCheck(){
		Y.on('scroll', function(){
			document.documentElement.scrollTop || document.body.scrollTop < 88 ?
				scrolledTop()
			:   scrolledPast();
		});
	}

	Y.one("select").on('valuechange', function(e) {
	  window.location = e.newVal;
	});
	
}); // YUI closes
