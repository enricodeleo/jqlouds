![jQlouds logo](logo.jpg "jQlouds logo")

An awesome yet simple plugin for jquery that let's you create clouds on the fly.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/enricodeleo/jqlouds/master/dist/jquery.jqlouds.min.js
[max]: https://raw.githubusercontent.com/enricodeleo/jqlouds/master/dist/jquery.jqlouds.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.jqlouds.min.js"></script>
<script>
jQuery(function($) {
  $('.selector').jQlouds();
});
</script>
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
Unlike the real sky, here we know exactly how much it is height: minimu height is given automatically based on the height of the biggest cloud. You can give a different height to the element through css or javascript/jquery.

### Options
This plugin comes with

## Examples
You can [see this plugin in action here][example].

[example]: http://enricodeleo.github.io/jqlouds/

## Release History
* __v0.2.0__ -  06/07/14
  * improved clouds' positioning
  * introduced configurable container's height
* __v0.1.0__ - 05/07/14
  * first release