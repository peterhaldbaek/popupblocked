# jquery.popupblocked

A simple jQuery plugin for browser popup detection.

## Motivation

I searched for a solution to determine whether popups are blocked or not by
the browser and found a lot of different solutions that seemed to cater
various scenarios. This project tries to address this by supplying a simple
test to determine whether popups are blocked or not so the user can be alerted
in a uniform way browser-wise about popups being blocked.

The test is carried out by trying to open a popup which is closed again if
successful. If there is any way to avoid the blinking popup let me know as this
is admittedly not very pretty but apparently the only current way of doing
this.

According to the docs at [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Window.open)
there is no reliable way of detecting whether a popup was blocked or not
unless you are using Firefox or IE6SP2 (yikes) since these browsers return
null when window.open is called (and the popup is blocked). Hopefully this
plugin can help shed some light on this.

This plugin is heavily inspired by
http://davidwalsh.name/popup-block-javascript and the discussion at
http://stackoverflow.com/questions/668286/detect-blocked-popup-in-chrome.

Any contributions or suggestions are very welcome!

## Installation

Include script *after* the jQuery library:

```html
<script src="/path/to/jquery.popupblocked.js"></script>
```

## Usage

Perform check:

```javascript
if ($.popupblocked()) {
  // show alert
} else {
  // go ahead and open your popup
}
```

The method also accepts these options (controlling the size and position of the
test popup):

* left (default: 0)
* top (default: 0)
* width (default: 100)
* height (default: 100)

```javascript
$.popupblocked({
  left: 0,
  top: 0,
  width: 100,
  height: 100
}));
```
