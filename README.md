![jQlouds logo](logo.jpg "jQlouds logo")

An awesome yet simple plugin for jquery that let's you create clouds on the fly.

## Getting Started

### With Bower
You can include jQlouds in your project with bower with:

```bash
bower install jqlouds --save
```

### Manual
Download the [production version][min] or the [development version][max] and include script after the jQuery library (unless you are packaging scripts somehow else).

[min]: https://github.com/enricodeleo/jqlouds/releases/download/0.2.0/jquery.jqlouds.min.js
[max]: https://github.com/enricodeleo/jqlouds/releases/download/0.2.0/jquery.jqlouds.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.jqlouds.min.js"></script>
```

## Documentation

### Basic usage
As you can see in the [getting started](#getting-started) section, you just need to pass a jquery selector and call the plugin in order
to get the job done.

You can generate multiple clouds on the same page, each element will be filled with _random static clouds_. Note that the selected element will be relatively positioned in order to accomodate absolutely positioned clouds.

```javascript
$('#sky1, #sky2').jQlouds();
```

### Height of the sky
Unlike the real sky, here we know exactly how much it is height: minimu height is given automatically based on the height of the biggest cloud. You can give a different height to the element throug the plugin itself.

__via css__

```html
<div id="sky" style="height:223px;"></div>
<script>
jQuery(function($) {
  $('#sky').jQlouds();
});
</script>
```

__via jquery__
```html
<div id="sky"></div>
<script>
jQuery(function($) {
  $('#sky').jQlouds({ skyHeight: 223 });
});
</script>
```

### Animation
Sometimes the wind blows and clouds became to move around the sky, isn't it? Well, you can turn on your very personal `wind` just by setting it to true:

```javascript
$('#sky').jQlouds({
  wind: true
});
```

__note about performances__

jQlouds relies on jQuery's `.animate()` to perform its animations. Since this is something quite heavy, animations come disabled by default. I'll try to improve this feature with CSS3 animations. If you'd like to contribute feel free to [fork this project](https://github.com/enricodeleo/jqlouds/fork) and submit a pull request.

### Number of clouds
The amount of clouds is chosen randomly between 20 and 30.

You can adjust these values settings `minClouds` and `maxClouds` parameters:

```javascript
$('#sky').jQlouds({
  minClouds: 5,
  maxClouds: 10
});
```

### Maximum clouds' size
The default image provided (it is served as _base64 image_ so you won't need to upload anything but the plugin) is 227x96 px. All the clouds generated are randomly sized less or equal to that size. You can adjust this behavior as per your needs with:

```javascript
$('#sky').jQlouds({
  maxWidth: 113,
  maxHeight: 48,
});
```

### Customize the cloud
If you don't like my cloud (how dare you! :P) you just need to change the `src` property when calling the plugin, like so:

```javascript
$('#sky').jQlouds({
  src: 'path/to/image.png',
});
```

### Options
These are all the current options supported by jQlouds, as we've seen above:

```javascript
options = {
  src: 'images/cloud.png', // path to image, the default is a base64 (you can see the actual string in sources)
  maxWidth: 227, // max image's width
  maxHeight: 96, // amx image's height
  minClouds: 20, // minimum amount of clouds
  maxClouds: 30, // maximum amount of clouds
  skyHeight: null, // height of the container element
  wind: false // animate clouds, default is false
};

$('#sky').jQlouds(options);
```

## Examples
You can [see this plugin in action here][example].

[example]: http://enricodeleo.github.io/jqlouds/

## ToDo
- Introduce CSS3 animations with jQuery fallback
- SVG images with png fallback 
- ?

## Release History
* __v0.2.3-css3__ - 27/01/15
  * alternative version that leverage __hardware acceleration__ via CSS3 and translate3d (see (the css3 branch)[https://github.com/enricodeleo/jqlouds/tree/css3])
* __v0.2.3__ -  06/07/14
  * registered to the bower repository
  * pushed to the [jquery plugin registry](http://plugins.jquery.com/jqlouds/)
  * published the little [demo website](http://enricodeleo.github.io/jqlouds/)
* __v0.2.0__ -  06/07/14
  * improved clouds' positioning
  * introduced configurable container's height
  * written an hopefully decent `README.md`
* __v0.1.0__ - 05/07/14
  * first release
