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

	// ShareThis
	Y.all('#shareThisLink #shareIcon').on('click', function(){
		Y.all('.sharethis').toggleClass('block');
	});

	var navLast;
	// Left sidebar dropdown menus
	var navEnter = function(e){
		if (!e.currentTarget.one('.nav') || navLast === e.currentTarget) return;
		
		e.currentTarget.one('.nav').setStyle('display', 'block');
		
		if (navLast)
			navLast.one('.nav').setStyle('display', 'none');
		
		navLast = e.currentTarget
	};
	var navSidebarLi = Y.all('nav.sidebar-menu > ul > li');
	navSidebarLi.on('mouseenter', navEnter);
	
	var navSubHeight = 109;
	Y.all('nav.sidebar-menu li .nav').each(function(el) {
		
		el.setStyle('height', navSubHeight);
	});

	// Mobile menu
	Y.one('select').on('change', function(){
		var selIndex = this.get("selectedIndex");
		var attrOpts = this.get("options");
		window.location = attrOpts.item(selIndex).get('value');
	});
	// http://yuilibrary.com/yui/docs/attribute/attribute-event.html

}); // YUI closes
