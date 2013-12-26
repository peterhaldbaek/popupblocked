/*
 * jQuery Popup Blocked plugin
 * https://github.com/peterhaldbaek/popup-blocked
 */
(function($) {
  'use strict';

  var popupblocked = function() {
    var popUp = window.open('/', 'popupblocked', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=1, height=1, visible=none');
    if (!popUp || typeof(popUp)==='undefined') {
      return true;
    } else {
      popUp.close();
      return false;
    }
  };

	$.popupblocked = popupblocked;

}(jQuery));
