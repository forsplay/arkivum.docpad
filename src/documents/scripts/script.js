YUI().use('node', 'event', function(Y) {
	
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

	Y.one("#mobileNav").change(function() {
	  window.location = this.one("option:selected").val();
	});
	
}); // YUI closes
