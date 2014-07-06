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

})(jQuery);

!function ($) {
    $(function(){
      window.prettyPrint && prettyPrint()
    })
}(window.jQuery);