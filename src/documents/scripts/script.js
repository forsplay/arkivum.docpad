YUI().use('node', 'event', 'event-valuechange', function(Y) {
	
	/*
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
	*/

	// Left sidebar dropdown menus
	var navEnter = function(e){
			e.currentTarget.one('.nav').setStyle('display','block');
	};
	var navLeave = function (e){
			e.currentTarget.one('.nav').setStyle('display','none');
	};
	Y.one('.nav').delegate('mouseenter', navEnter, 'li' );
	Y.one('.nav').delegate('mouseleave', navLeave, 'li' );

	// Mobile menu
	Y.one('select').on('change', function(){
		var selIndex = this.get("selectedIndex");
		var attrOpts = this.get("options");
		window.location = attrOpts.item(selIndex).get('value'); //.filter("option:selected").get('value');
	});
	//Y.one('.mobile-menu').delegate('change', mobileSelect, 'select');
	//http://yuilibrary.com/yui/docs/api/modules/event-valuechange.html

}); // YUI closes
