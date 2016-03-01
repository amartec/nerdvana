$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

//FUNCION CONVERTIR SVGS
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        
        // Check if the viewport is set, else we gonna set it if we can.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

//SLIDER
jQuery(document).ready(function() {			
jQuery('.tp-banner').show().revolution(
{
	dottedOverlay:"none",
	delay:16000,
	startwidth:1170,
	startheight:500,
	hideThumbs:200,
	
	thumbWidth:100,
	thumbHeight:50,
	thumbAmount:5,
	
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview4",
	
	touchenabled:"on",
	onHoverStop:"on",
	
	swipe_velocity: 0.7,
	swipe_min_touches: 1,
	swipe_max_touches: 1,
	drag_block_vertical: false,
							
	parallax:"mouse",
	parallaxBgFreeze:"on",
	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
							
	keyboardNavigation:"off",
	
	navigationHAlign:"center",
	navigationVAlign:"bottom",
	navigationHOffset:0,
	navigationVOffset:20,

	soloArrowLeftHalign:"left",
	soloArrowLeftValign:"center",
	soloArrowLeftHOffset:20,
	soloArrowLeftVOffset:0,

	soloArrowRightHalign:"right",
	soloArrowRightValign:"center",
	soloArrowRightHOffset:20,
	soloArrowRightVOffset:0,
			
	shadow:0,
	fullWidth:"on",
	fullScreen:"off",

	spinner:"spinner4",
	
	stopLoop:"off",
	stopAfterLoops:-1,
	stopAtSlide:-1,

	shuffle:"off",
	
	autoHeight:"off",						
	forceFullWidth:"off",										
							
	hideThumbsOnMobile:"off",
	hideNavDelayOnMobile:1500,						
	hideBulletsOnMobile:"off",
	hideArrowsOnMobile:"off",
	hideThumbsUnderResolution:0,
	
	hideSliderAtLimit:0,
	hideCaptionAtLimit:0,
	hideAllCaptionAtLilmit:0,
	startWithSlide:0,
	videoJsPath:"rs-plugin/videojs/",
	fullScreenOffsetContainer: ""	
});			


});	//ready
