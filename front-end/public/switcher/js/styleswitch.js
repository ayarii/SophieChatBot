/* Style Switcher */

window.console = window.console || (function($){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function($){ 
				   
var styleswitcherstr = ' \
	<h2>Style Switcher <a href="#"></a></h2> \
    <div class="content"> \
    <h3>Layout Style</h3> \
	<div class="layout-switcher"> \
		<a id="wide" href="../image+text-rotator/index.html" class="layout">Header Text & Image Slider</a> \
		<a id="boxed" href="../image-rotate/index.html" class="layout">Header Image Slider</a> \
		<a id="boxed" href="../static-header/index.html" class="layout">Header Static</a> \
		<a id="boxed" href="../text-rotate/index.html" class="layout">Header Text Slider</a> \
		<a id="boxed" href="../video-header/index.html" class="layout">Header Video</a> \
    </div> \
    \
    <div class="clear"></div> \
    <div class="switcher-box"> \
		<h3>Change Color</h3> \
		<a id="default" class="styleswitch color"></a> \
		<a id="yellow" class="styleswitch color"></a> \
		<a id="blue" class="styleswitch color"></a> \
		<a id="red" class="styleswitch color"></a> \
		<a id="green" class="styleswitch color"></a> \
		<a id="orange" class="styleswitch color"></a> \
		<a id="moff" class="styleswitch color"></a> \
		<a id="grey" class="styleswitch color"></a> \
    </div><!-- End switcher-box --> \
    <div class="bg hidden">  \
		<h3>BG Pattern</h3>  \
		<a id="wood" class="pattern"></a> \
		<a id="crossed" class="pattern"></a> \
		<a id="fabric" class="pattern"></a> \
		<a id="linen" class="pattern"></a> \
		<a id="diagmonds" class="pattern"></a> \
		<a id="triangles" class="pattern"></a> \
		<a id="black_thread" class="pattern"></a> \
		<a id="checkered_pattern" class="pattern"></a> \
		<a id="black_mamba" class="pattern"></a> \
		<a id="back_pattern" class="pattern"></a> \
		<a id="vichy" class="pattern"></a> \
		<a id="diamond_upholstery" class="pattern"></a> \
		<a id="lyonnette" class="pattern"></a> \
		<a id="graphy" class="pattern"></a> \
		<a id="subtlenet2" class="pattern"></a> \
    </div> \
    \
    <div class="clear"></div> \
    </div><!-- End content --> \
	';
	
$(".switcher").prepend( styleswitcherstr );

});

/* boxed & wide syle */
$(document).ready(function(){ 

var cookieName = 'wide';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[data-name=layout]').attr('href', 'css/layout/' + layout + '.css');
}

if( $.cookie(cookieName)) {
changeLayout($.cookie(cookieName));
}

$("#wide").click( function(){ $
changeLayout('wide');
});

$("#boxed").click( function(){ $
changeLayout('boxed');
});

});




/* Skins Style */
$(document).ready(function($){ 

var cookieName = 'default';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[data-name=skins]').attr('href', 'switcher/css/skins/' + layout + '.css');
}

if( $.cookie(cookieName)) {
changeLayout($.cookie(cookieName));
}

$("#default").click( function(){ $
changeLayout('default');
});

$("#turqoise").click( function(){ $
changeLayout('turqoise');
});
$("#moff").click( function(){ $
changeLayout('moff');
});
$("#red").click( function(){ $
changeLayout('red');
});
$("#blue").click( function(){ $
changeLayout('blue');
});
$("#orange").click( function(){ $
changeLayout('orange');
});
$("#clouds").click( function(){ $
changeLayout('clouds');
});
$("#grey").click( function(){ $
changeLayout('grey');
});
$("#green").click( function(){ $
changeLayout('green');
});
$("#yellow").click( function(){ $
changeLayout('yellow');
});





});


/* Reset Switcher */
$(document).ready(function(){ 

// Style Switcher	
$('.switcher').animate({
	left: '-255px'
});

$('.switcher h2 a').click(function(e){
	e.preventDefault();
	var div = $('.switcher');
	console.log(div.css('left'));
	if (div.css('left') === '-255px') {
		$('.switcher').animate({
		  left: '0px'
		}); 
	} else {
		$('.switcher').animate({
		  left: '-255px'
		});
	}
})

		 
});						   

