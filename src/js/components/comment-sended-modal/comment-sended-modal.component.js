(function() {
  'use strict';

  angular
    .module('angularjs-electron-seed')
    .component('commentSendedModal', {
      templateUrl: './js/components/comment-sended-modal/comment-sended-modal.component.html',
      bindings: {
        close: '&',
        dismiss: '&'
      },
      controllerAs: 'vm',
      controller: [function CommentSendedModalCtrl() {
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
