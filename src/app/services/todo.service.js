(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('todoService', todoService);

    todoService.$inject = ['$q', '$firebaseArray'];

    function todoService($q, $firebaseArray) {
      var url = 'https://saunders1989todo.firebaseio.com';
      var ref = new Firebase(url);

      var self = {
        'loadTodo': function () {
          return $firebaseArray(ref);
        }
      }

      return self;

    }
})();
