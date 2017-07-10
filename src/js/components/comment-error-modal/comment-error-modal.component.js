(function() {
  'use strict';

  angular
    .module('angularjs-electron-seed')
    .component('commentErrorModal', {
      templateUrl: './js/components/comment-error-modal/comment-error-modal.component.html',
      bindings: {
        close: '&',
        dismiss: '&'
      },
      controllerAs: 'vm',
      controller: [function CommentErrorModalCtrl() {
        var vm = this;

        vm.ok = function() {
          vm.close();
        };

        vm.cancel = function() {
          vm.dismiss();
        };
      }]
    });
})();
