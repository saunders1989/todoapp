(function() {
  'use strict';

  angular
    .module('todoApp')
    .controller('TodoController', TodoController);

  /** @ngInject */
  function TodoController(todoService) {
    var vm = this;

    var service = todoService;

    vm.tasks = service.loadTodo();


  }
})();
