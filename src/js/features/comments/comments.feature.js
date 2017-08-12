(function() {
  'use strict';

  angular
    .module('angularjs-electron-seed')
    .component('comments', {
      templateUrl: './js/features/comments/comments.feature.html',
      controllerAs: 'vm',
      controller: ['$log', '$uibModal', 'commentsService', function CommentsCtrl($log, $uibModal, commentsService) {
        var vm = this;
        vm.comment = '';

        vm.save = function() {
          commentsService.save(vm.comment)
            .then(function() {
              $uibModal.open({
                component: 'commentSendedModal'
              });
            })
            .catch(function(err) {
              $log.error(err);
              $uibModal.open({
                component: 'commentErrorModal'
              });
            })
            .finally(function() {
              vm.comment = '';
            });
        };
      }]
    });
})();
