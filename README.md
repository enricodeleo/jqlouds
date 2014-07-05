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

###Basic usage
As you can see in the __getting started__ section, you just need to pass a jquery selector and call the plugin in order
to get the job done.
You can generate multiple clouds on the same page, each element will be filled with _random static clouds_.

### Options
This plugin comes with

## Examples
You can [see this plugin in action here][example].

[example]: http://enricodeleo.github.io/jqlouds/

## Release History
__v0.1.0__ - first release 05/07/14