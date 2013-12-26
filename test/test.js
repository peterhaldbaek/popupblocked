(function($) {
  $(function() {
    if ($.popupblocked()) {
      $('#not').hide();
    } else {
      $('#not').show();
    }
  })
})(jQuery);
