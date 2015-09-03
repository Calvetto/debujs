
;(function($, undefined) {
  'use strict';
  if (typeof window.DEBUJS !== 'undefined') {
    return;
  }
  //
  // Module general vars
  //
  var
    $document = $(document),
    docWidth = document.documentElement.offsetWidth;
  //
  // Methods
  //
  function init(params) {
    // Method code here

  }

  function checkBar(params) {
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
  }

  //
  // Modeule events
  //
  $document.on('change', 'SELECTOR', function(){

  })
  .on('click', 'SELECTOR', function(){

  });

  //
  // Public methods / properties
  //
  window.DEBUJS = {
    init: init,
    checkBar: checkBar
  };

}(jQuery));
