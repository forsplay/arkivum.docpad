YUI().use('node', 'event', 'anim', /*'node-event-simulate',*/ 'button', function (Y) {

	// Arkivum slash enter animation
	var slashIn = new Y.Anim(
	  {
	  	node: '#slash',
	  	to: {
	  		marginTop: '8px',
	  		marginLeft: '-7px'
	  	},
	    duration: 0.777,
	    easing: Y.Easing.bounceBoth
	  });
	slashIn.run();

	// Arkivum slash exit animation
	var slashOut = new Y.Anim(
	  {
	  	node: '#slash',
	  	to: {
	  		marginTop: '26%',
	  		marginLeft: '-51px'
	  	},
	    duration: 0.777,
	    easing: Y.Easing.bounceOut
	  });
	  Y.on('beforeunload', function(){
	  	 slashOut.run();
	  });

	/*
	function scrollCheck(){
		Y.on('scroll', function(){
			document.documentElement.scrollTop || document.body.scrollTop < 88 ?
				scrolledTop()
			:   scrolledPast();
		});
	}
	*/


});
