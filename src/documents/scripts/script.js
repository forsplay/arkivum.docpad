YUI().use('node', 'event', 'anim', /*'node-event-simulate',*/ 'button', function (Y) {

	// Arkivum slash enter animation
	var slashIn = new Y.Anim(
	  {
	  	node: '#slash',
	  	to: {
	  		marginTop: '0%',
	  		marginLeft: '-23px'
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
			width: '128%',
			marginLeft: '-17px'
		});
		Y.one('#ISOcertStamp').setStyles({
			height: '148%',
			width: '148%',
			marginLeft: '-21px'
		});
		Y.one('.pure-menu').setStyles({
			height: '57px',
			'box-shadow': 'rgb(252, 252, 255) 0px 21px'
			});
		Y.one('#logo_svg').setStyles({
			height: '93%',
			width: '93%',
			margin: '-23px 0 13px -11px'
		});
		Y.one('.slogan').setStyles({
			margin: '-14px 0 0 -94px',
			color: 'rgb(81, 115, 138)'
		});
		Y.one('#slash').setStyle('margin', '-8% 0 0 -10px');
		Y.all('.sidebar-menu').setStyles({
			//margin: '95px 0 0 0',
			padding: '0'
		});
		Y.all('#menu-hr-top').setStyles({
			margin: '7px 0 0 0'
		});
		Y.all('.sidebar-menu span').setStyles({
			margin: '4px 0'
		});
		Y.all('.sidebar-menu a').setStyles({
			fontSize: '89%'
		});
		Y.all('.sidebar-menu .menu-icon').setStyles({
			margin: '9px 0 0 -4px'
		});
		/* Y.all('.sidebar-menu bdi').setStyles({
			borderTop: '#000',
			borderBottom: '#00'
		}); */
		Y.all('.cl-effect-2 a').setStyles({
			lineHeight: '33px'
		});
		Y.one('.pinboard').setStyles({
			opacity: '0.777'
		});
	}

	function scrolledTop(){
		trimVar();
		Y.all('.circBox').removeClass('fixed-circ');
		Y.one('#confidentialStamp').setStyles({
			height: '119%',
			width: '119%',
			marginLeft: '-13px'
		});
		Y.one('#ISOcertStamp').setStyles({
			height: '139%',
			width: '139%',
			marginLeft: '-20px'
		});
		Y.one('.pure-menu').setStyles({
			height: '113px',
			'box-shadow': 'rgb(255, 255, 255) 0px 21px'
			});
		Y.one('#logo_svg').setStyles({
			height: '93%',
			width: '93%',
			margin: '0 0 0 -9px'
		});
		Y.one('.slogan').setStyles({
			margin: '-3px 0 0 -107px',
			color: 'inherit'
		});
		Y.one('#slash').setStyle('margin','0% 0 0 -23px');
		Y.all('.sidebar-menu').setStyles({
			//margin: '82px 0 0 0',
			padding: '11px 0'
		});
		Y.all('#menu-hr-top').setStyles({
			margin: '3px 0 0 0'
		});
		Y.all('.sidebar-menu span').setStyles({
			margin: '7px 0'
		});
		Y.all('.sidebar-menu a').setStyles({
			fontSize: '100%'
		});
		Y.all('.sidebar-menu .menu-icon').setStyles({
			margin: '14px 0 0 -4px'
		});
		/* Y.all('.sidebar-menu bdi').setStyles({
			borderTop: 'rgb(235, 235, 235)',
			borderBottom: 'rgb(235, 235, 235)'
		}); */
		Y.all('.cl-effect-2 a').setStyles({
			lineHeight: '44px'
		});
		Y.one('.pinboard').setStyles({
			opacity: '0'
		});
	}

	function scrollCheck(){
		Y.on('scroll', function(){
			document.documentElement.scrollTop || document.body.scrollTop < 88 ?
				scrolledTop()
			:   scrolledPast();
		});
	}

	function toggleSidebar(){
		Y.all('.circBox').toggleClass('fixed-circ');
		Y.all('.trim').toggleClass('fixed-trim');
		Y.all('.box').toggleClass('fixed');
	}

	var pinBtn = new Y.ToggleButton({
		srcNode:'.pinboard-btn',
		after:{
			'pressedChange': function(){
				var button = this,
				pressed = button.get('pressed');
			scrollCheck();
			toggleSidebar();
			}
		}
	}).render();

	var pressed = pinBtn.get('pressed');
    pinBtn.set('pressed', !pressed);

});
