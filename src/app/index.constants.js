/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('todoApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
