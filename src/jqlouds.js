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
      // retrieve clouds and append to the target element.
      var clouds = $.jQlouds.jQloudsFactory(options);
      $(this).addClass('jqlouds-clouds').append(clouds);

      //trigger init if we decided to turn  wind on
      if ( options.wind === true ) {
        $(this).trigger('jqlouds.init', [ $(this) ]);
      }

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
    wind: true,
    skyHeight: $(this).height(),
    skyWidth: $(this).width()
  };

  $.jQlouds.jQloudsFactory = function(options) {

    var clouds = '';
    var randomClouds = $.randomBetween(options.minClouds, options.maxClouds);

    // generate a bunch of clouds as per settings and some randomness
    for (var i = 0; i < randomClouds; i++) {

      var sizeRatio = $.randomBetween(1, 4);

      var cloud = $('<img />', {
        class: 'jqlouds-cloud',
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

  //events: init is the kickstart animation, wind the recursive one
  $(document).on('jqlouds.init', function(event, element) {
    element.find('img.jqlouds-cloud').each(function() {
      $.jQlouds.jQloudsAnimate($(this));
    });
  });

  $(document).on('jqlouds.wind', function(event, element) {
      $.jQlouds.jQloudsAnimate(element);
  });


  //animation when the first or consecutive wind blows
  $.jQlouds.jQloudsAnimate = function(element) {
      // each element will be moved right or left randomly
      var direction;
      ( $.randomBetween(0, 1) === 0 ) ? direction = '+' : direction = '-';

      //applying movements
      element
      .delay($.randomBetween(4000, 8000))
      .animate({left: direction + '=' + $.randomBetween(10, 40)}, $.randomBetween(4000, 7000), 'linear', function() {
        $(document).trigger('jqlouds.wind',[ element ]);
    });
  };

}(jQuery));
