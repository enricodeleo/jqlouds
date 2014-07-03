/*
 * jqlouds
 *
 *
 * Copyright (c) 2014 Enrico Deleo
 * Licensed under the MIT license.
 */

;(function ($) {

  //we'll need random numbers
  $.extend({
    random: function(X) {
      return Math.floor(X * (Math.random() % 1));
    },
    randomBetween: function(MinV, MaxV) {
      return MinV + jQuery.random(MaxV - MinV + 1);
    }
  });

  // Collection method.
  $.fn.jQlouds = function (options) {
    options = $.extend({}, $.jQlouds.options, options);
    return this.each(function (i) {
      // Do something awesome to each selected element.
      $.jQlouds.spawn(options);
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
    cloudSrc: 'images/cloud.png',
    cloudWidth: 227,
    cloudHeight: 96,
    randomClouds: $.randomBetween(20, 30),
    skyHeight: $(this).height(),
    skyWidth: $(this).width()
  };

  $.jQlouds.spawn = function(options) {
    for (var i = 0; i < options.randomClouds; i++) {

      var sizeRatio = $.randomBetween(1, 4),
      cldWidth = Math.floor(options.cloudWidth/sizeRatio),
      cldHeight = Math.floor(options.cloudHeight/sizeRatio),
      cloud = new Image(cldWidth, cldHeight);
      cloud.className += 'cloud-up';
      cloud.src = options.cloudSrc;
      cloud.style.position = 'absolute';
      cloud.style.bottom = options.skyHeight/$.randomBetween(2, 4) + 'px';
      if ( i % 2 === 0 ) {
        cloud.style.left = (options.skyWidth/2) + (options.skyWidth/$.randomBetween(2, 20)) + 'px';
      }
      else {
        cloud.style.left = options.skyWidth/$.randomBetween(2, 20) + 'px';
      }

      $('#sky').append(cloud);

      //some css effect
      $('.cloud-up').each(function(i, obj) {
        var randBlur = $.randomBetween(1, 4),
        randOpacity = '0.' + $.randomBetween(5, 8);
        if( randBlur === 1 ) {
          $(this).addClass('blur');
        }
        else if ( randBlur === 2 ) {
          $(this).css({ opacity: randOpacity });
        }
      });

      //ok first animation, then this event will be triggered every time the previous animation ends
      $(document).trigger('animateNow');

    }
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

  // Custom selector.
  $.expr[':'].jQlouds = function (elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
