(function() {
  'use strict';

  angular
  .module('angularjs-electron-seed')
  .component('login', {
    templateUrl: './js/features/login/login.feature.html',
    controllerAs: 'vm',
    controller: ['$state', 'loginService', function ($state, loginService) {
      var vm = this;

      vm.alert = { visible: false };
      vm.auth = function() {
        var myvar = 2
        if (vm.form.$invalid) {
          return;
        }
        loginService.auth(vm.user,vm.pass)
        .then(function() {
          $state.go('layout.home');
        })
        .catch(function() {
          vm.alert = {
            type: 'danger',
            message: 'Usuario o contrasena incorrectos',
            visible: true
          };
        });
      };
    }]
  });

})();
