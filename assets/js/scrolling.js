linkScroll: function(){
			$("a[data-scrollto]").click(function(){
				var element = $(this),
					divScrollToAnchor = element.attr('data-scrollto'),
					divScrollSpeed = element.attr('data-speed'),
					divScrollOffset = element.attr('data-offset'),
					divScrollEasing = element.attr('data-easing'),
					divScrollHighlight = element.attr('data-highlight');

					if( !divScrollSpeed ) { divScrollSpeed = 750; }
					if( !divScrollOffset ) { divScrollOffset = SEMICOLON.initialize.topScrollOffset(); }
					if( !divScrollEasing ) { divScrollEasing = 'easeOutQuad'; }

				$('html,body').stop(true).animate({
					'scrollTop': $( divScrollToAnchor ).offset().top - Number(divScrollOffset)
				}, Number(divScrollSpeed), divScrollEasing, function(){
					if( divScrollHighlight != '' ) {
						if( $(divScrollToAnchor).find('.highlight-me').length > 0 ) {
							$(divScrollToAnchor).find('.highlight-me').animate({'backgroundColor': divScrollHighlight}, 300);
							var t = setTimeout( function(){ $(divScrollToAnchor).find('.highlight-me').animate({'backgroundColor': 'transparent'}, 300); }, 500 );
						} else {
							$(divScrollToAnchor).animate({'backgroundColor': divScrollHighlight}, 300);
							var t = setTimeout( function(){ $(divScrollToAnchor).animate({'backgroundColor': 'transparent'}, 300); }, 500 );
						}
					}
				});

				return false;
			});
		},

		extras: function(){
			$('[data-toggle="tooltip"]').tooltip({container: 'body'});
			$('#primary-menu-trigger,#overlay-menu-close').click(function() {
				$( '#primary-menu > ul, #primary-menu > div > ul' ).toggleClass("show");
				return false;
			});
			$('#page-submenu-trigger').click(function() {
				$body.toggleClass('top-search-open', false);
				$pagemenu.toggleClass("pagemenu-active");
				return false;
			});
			$pagemenu.find('nav').click(function(e){
				$body.toggleClass('top-search-open', false);
				$topCart.toggleClass('top-cart-open', false);
			});
			if( SEMICOLON.isMobile.any() ){
				$body.addClass('device-touch');
			}
		}


