(function() {
  'use strict';

  angular
    .module('todoApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
