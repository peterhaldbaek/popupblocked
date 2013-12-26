/*
 * jQuery Popup Blocked plugin
 * https://github.com/peterhaldbaek/popupblocked
 */
(function($) {
  'use strict';

  var defaults = {
    left: 0,
    top: 0,
    width: 100,
    height: 100
  };

  var popupblocked = function(options) {
    var opts = $.extend({}, options, defaults);

    var features = 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,visible=none' +
      ',left=' + opts.left +
      ',top=' + opts.top +
      ',width=' + opts.width +
      ',height=' + opts.height;

    var popUp = window.open('/', 'popupblocked', features);
    if (!popUp || typeof(popUp)==='undefined') {
      return true;
    } else {
      popUp.close();
      return false;
    }
  };

  $.popupblocked = popupblocked;

}(jQuery));
