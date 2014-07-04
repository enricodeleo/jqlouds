/*
 * jQlouds
 * An awesome yet simple plugin for jquery that let's you create clouds on the fly.
 * Copyright (c) 2014 Enrico Deleo - enricodeleo.com
 * Licensed under the MIT license.
 * license url: http://www.opensource.org/licenses/mit-license.php
 */

;(function ($) {

  //we'll need random numbers
  $.extend({
    random: function(X) {
      return Math.floor(X * (Math.random() % 1));
    },
    randomBetween: function(MinV, MaxV) {
      return MinV + $.random(MaxV - MinV + 1);
    }
  });

  // Collection method.
  $.fn.jQlouds = function (options) {
    options = $.extend({}, $.jQlouds.options, options);
    return this.each(function (i) {
      // Do something awesome to each selected element.
      var clouds = $.jQlouds.cloudsFactory(options);
      $(this).append(clouds);

      //ok first animation, then this event will be triggered every time the previous animation ends
      $(document).trigger('animateNow');
    });
  };

  // Static method.
  $.jQlouds = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jQlouds.options, options);
    // Return something awesome.
    return function(){
      console.log(options);
    };
  };

  // Static method default options.
  $.jQlouds.options = {
    src: 'images/cloud.png', // path to image
    maxWidth: 227, // max image's width
    maxHeight: 96, // min image's height
    minClouds: 20, // minimum amount of clouds
    maxClouds: 30, // maximum amount of clouds
    onGenerate: function(){},
    onAnimate: function(){},
    skyHeight: $(this).height(),
    skyWidth: $(this).width()
  };

  $.jQlouds.cloudsFactory = function(options) {

    var clouds;
    var randomClouds = $.randomBetween(options.minClouds, options.maxClouds);

    // generate a bunch of clouds as per settings and some randomness
    for (var i = 0; i < randomClouds; i++) {

      var sizeRatio = $.randomBetween(1, 4);

      var cloud = $('<img />', {
        className: 'cloud-up',
        src: options.src,
        height: Math.floor(options.maxHeight/sizeRatio),
        width: Math.floor(options.maxWidth/sizeRatio),
      });

      // random position on the target element
      cloud.css({
        position: 'absolute',
        bottom: options.skyHeight/$.randomBetween(2, 4) + 'px',
        left: ( i % 2 === 0 ) ? (options.skyWidth/2) + (options.skyWidth/$.randomBetween(1, 20)) + 'px' : options.skyWidth/$.randomBetween(1, 20) + 'px'
      });

      //some cloud should be blurred
      if ( $.randomBetween(1, 4) === 1 ) {
        cloud.addClass('blur');
      }

      //sometimes clouds are less opaque
      if ( $.randomBetween(1, 4) === 2 ) {
        cloud.css({ opacity: '0.' + $.randomBetween(5, 8) });
      }

      clouds += cloud[0].outerHTML; //append this cloud to the clouds

    }

    return clouds; //returns all clouds

  };

    //recall animation
  $(document).on('animateNow', function() {

    $('.cloud-up').each(function(i, obj) {
      $.jQlouds.animateCloud($(this));
    });

  });

  $.jQlouds.animateCloud = function(element) {
    element.animate({left: '+='+$.randomBetween(10, 40)}, $.randomBetween(4000, 7000), 'linear').
    animate({left: '+='+$.randomBetween(10, 40)}, $.randomBetween(4000, 7000), 'linear').
    animate({left: '-='+$.randomBetween(10, 40)}, $.randomBetween(4000, 7000), 'linear').delay($.randomBetween(4000, 10000)).
    animate({left: '-='+$.randomBetween(10, 40)}, $.randomBetween(4000, 7000), 'linear', function() {
      $(document).trigger('animateNow');
    });
  };

}(jQuery));
