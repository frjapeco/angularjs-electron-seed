(function() {
  'use strict';

  angular
    .module('angularjs-electron-seed')
    .component('comments', {
      templateUrl: './js/features/comments/comments.feature.html',
      controllerAs: 'vm',
      controller: ['$uibModal', 'commentsService', function CommentsCtrl($uibModal, commentsService) {
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
