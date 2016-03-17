(function () {
  'use strict';

  angular
    .module('todoApp')
    .factory('todoService', todoService);

    todoService.$inject = ['$q', 'Firebase', '$firebaseArray'];

    function todoService($q, Firebase, $firebaseArray) {
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
