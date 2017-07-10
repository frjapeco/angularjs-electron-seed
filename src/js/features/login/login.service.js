(function() {
  'use strict';

  angular
  .module('angularjs-electron-seed')
  .service('loginService', ['$q', function($q) {
    this.auth = function(user, pass) {
      var deferred = $q.defer();

      if (user === 'admin' && pass === '123456') {
        deferred.resolve();
      } else {
        deferred.reject();
      }
      return deferred.promise;
    };
  }]);
})();
