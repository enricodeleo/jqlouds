'use strict';

;(function($){

$('#sky').jQlouds({
  src: 'images/cloud.png', // path to image
  minClouds: 3, // minimum amount of clouds
  maxClouds: 5, // maximum amount of clouds
});

$('#sky2').jQlouds({
  maxWidth: 113, // max image's width
  maxHeight: 48, // amx image's height
  minClouds: 8, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
})

$('#sky3').jQlouds({
  minClouds: 8, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
  wind: true
})

$('#sky4').jQlouds({
  src: 'images/cloud-2.png',
  wind: true,
  maxWidth: 240, // max image's width
  maxHeight: 110, // amx image's height
})

})(jQuery);

!function ($) {
    $(function(){
      window.prettyPrint && prettyPrint()
    })
}(window.jQuery);