(function() {
  'use strict';

  angular
    .module('angularjs-electron-seed', [
      'ui.router',
      'ui.bootstrap',
      'ngMessages'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');

      $stateProvider
        .state('login', {
          url: '/login',
          component: 'login'
        })
        .state('layout', {
          abstract: true,
          component: 'layout'
        })
        .state('layout.home', {
          url: '/home',
          component: 'home'
        })
        .state('layout.comments', {
          url: '/comments',
          component: 'comments'
        });
    }]);
})();
