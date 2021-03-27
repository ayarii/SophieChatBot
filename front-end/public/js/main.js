(function($){	
	"use strict";	 	  
	$(document).ready(function(){
		$('.fullwidthbanner').revolution({
			delay:6000,
			startwidth:960,
			startheight:470,
			onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
			thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
			thumbHeight:50,
			thumbAmount:3,
			hideThumbs:200,
			navigationType:"none",				// bullet, thumb, none
			navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
			navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
			navigationHAlign:"center",				// Vertical Align top,center,bottom
			navigationVAlign:"bottom",					// Horizontal Align left,center,right
			navigationHOffset:0,
			navigationVOffset:0,
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:0,
			soloArrowLeftVOffset:0,
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:0,
			soloArrowRightVOffset:0,
			lazyLoad:"on",
			touchenabled:"off",						// Enable Swipe Function : on/off
			stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
			stopAfterLoops:1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
			fullWidth:"on",
			shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
		});
		
		
		
		
		/*----------------------------------------------------*/
		/*	Carousel
		/*----------------------------------------------------*/
		// Add classes for other carousels
		var $carousel = $('.recent-work-jc');
		var scrollCount;
		function adjustScrollCount() {
			if( $(window).width() < 800 ) {
				scrollCount = 1;
			} else {
				scrollCount = 3;
			}
		}
		
		function adjustCarouselHeight() {
			$carousel.each(function() {
				var $this    = $(this);
				var maxHeight = -1;
				$this.find('li').each(function() {
					maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
				});
				$this.height(maxHeight);
			});
		}

		function initCarousel() {
			adjustCarouselHeight();
			adjustScrollCount();
			var i = 0;
			var g = {};
			$carousel.each(function() {
				i++;
				var $this = $(this);
				g[i] = $this.jcarousel({
					animation           : 600,
					scroll              : scrollCount
				});
				$this.jcarousel('scroll', 0);
				 $this.prev().find('.jcarousel-prev').bind('active.jcarouselcontrol', function() {
					$(this).addClass('active');
				}).bind('inactive.jcarouselcontrol', function() {
					$(this).removeClass('active');
				}).jcarouselControl({
					target: '-='+scrollCount,
					carousel: g[i]
				});

				$this.prev().find('.jcarousel-next').bind('active.jcarouselcontrol', function() {
					$(this).addClass('active');
				}).bind('inactive.jcarouselcontrol', function() {
					$(this).removeClass('active');
				}).jcarouselControl({
					target: '+='+scrollCount,
					carousel: g[i]
				});

				$this.touchwipe({
					wipeLeft: function() {
						$this.jcarousel('scroll','+='+scrollCount);
					},
					wipeRight: function() {
						$this.jcarousel('scroll','-='+scrollCount);
					}
				});
			});
		}
		
		$(window).load(function(){
			initCarousel();
		});
		
		$(window).resize(function () {
			$carousel.each(function() {
				var $this = $(this);
				$this.jcarousel('destroy');
			});
			initCarousel();
		});
		
		
		
		$.fn.scrollView = function () {
		  return this.each(function () {
			$('html, body').animate({
			  scrollTop: $(this).offset().top
			}, 1000);
		  });
		}
		
	$('#navigation li a').on( "click", function(event) {  
	  $('#eventsSchedule').scrollView();
	});
		/*----------------------------------------------------*/
		/*	Swipe Slider 
		/*----------------------------------------------------*/
		window.mySwipe = new Swipe(document.getElementById('slider'), {
		  startSlide: 2,
		  speed: 400,
		  auto: 3000,
		  continuous: true,
		  disableScroll: false,
		  stopPropagation: false,
		  callback: function(index, elem) {},
		  transitionEnd: function(index, elem) {}
		});
	
	/* ------------------ End Document ------------------ */
	});
})(this.jQuery);



/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad, and Android mobile phones
 * Common usage: wipe images (left and right to show the previous or next image)
 *
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);



