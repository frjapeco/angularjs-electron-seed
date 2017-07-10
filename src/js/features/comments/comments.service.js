(function() {
  'use strict';

  var fs = require('fs');
  var os = require('os');

  angular
    .module('angularjs-electron-seed')
    .service('commentsService', ['$q', function commentsService($q) {
      this.save = function(comment) {
        var filename = 'comments.txt';
        var path = '';
        var deferred = $q.defer();
        var platform = process.platform;

        switch (platform) {
          case 'win32':
            path = os.homedir() + '\\' + filename;
            break;
          case 'linux':
            path = os.homedir() + '/' + filename;
            break;
          case 'darwin':
            path = os.homedir() + '/' + filename;
            break;
        }
        fs.writeFile(path, comment, function(err) {
          if (err) {
            deferred.reject(err);
          } else {
            deferred.resolve();
          }
        });
        return deferred.promise;
      }
    }]);
})();
