YUI().use('node', 'event', 'anim', 'node-event-simulate', function (Y) {

	// Arkivum slash enter animation
	var slashIn = new Y.Anim(
	  {
	  	node: '#slash',
	  	to: {
	  		marginTop: '2%',
	  		marginLeft: '-15px'
	  	},
	    duration: 0.777,
	    easing: Y.Easing.backBoth
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
	    easing: Y.Easing.backOut
	  });
	  Y.on('beforeunload', function(){
	  	 slashOut.run();
	  });

	// Confidential MouseOver Simulate
	/*
	Y.one('#confidentialStamp').on('mouseover', function(){
		Y.one('.circ').simulate('mouseover');
	});
	*/

	function trimPara(){
		Y.all('.trim').addClass('fixed-trim')
					  .addClass('flip-vertical');
		Y.all('.box').addClass('fixed');
	}
	function trimVar(){
		Y.all('.trim').removeClass('fixed-trim')
					  .removeClass('flip-vertical');
		Y.all('.box').removeClass('fixed');
	}

	// Scroll Events
	function scrolledPast(){
		trimPara();
		Y.all('.circBox').addClass('fixed-circ');
		Y.one('#confidentialStamp').setStyles({
			height: '128%',
			width: '128%'
		});
		Y.one('#ISOcertStamp').setStyles({
			height: '148%',
			width: '148%'
		});
		Y.one('.pure-menu').setStyle('height', '46px');
		Y.one('#logo_svg').setStyles({
			height: '93%',
			width: '93%',
			marginTop: '-18px',
			marginBottom: '13px'
		});
		Y.one('.slogan').setStyles({
			margin: '-18px 0 0 -108px',
			color: 'rgb(63, 128, 172)'
		});
		Y.one('#slash').setStyle('margin', '-3% 0 0 -10px')
	}

	function scrolledTop(){
		trimVar();
		Y.all('.circBox').removeClass('fixed-circ');
		Y.one('#confidentialStamp').setStyles({
			height: '119%',
			width: '119%'
		});
		Y.one('#ISOcertStamp').setStyles({
			height: '139%',
			width: '139%'
		});
		Y.one('.pure-menu').setStyle('height', 'inherit');
		Y.one('#logo_svg').setStyles({
			height: '93%',
			width: '93%',
			marginTop: '0',
			marginBottom: 'inherit'
		});
		Y.one('.slogan').setStyles({
			margin: '-7px 0 0 -114px',
			color: 'inherit'
		});
		Y.one('#slash').setStyle('margin','2% 0px 0px -15px');
	}

	Y.on('scroll', function(){
		document.documentElement.scrollTop || document.body.scrollTop < 88 ?
			scrolledTop()
		:   scrolledPast();
	});

});
