var app = angular.module('jtaEnter', [])
.controller('formCtrl', function($scope) {
  $scope.person = {firstname: '', lastname: '', pin: ''};
  $scope.submit = {};
  $scope.reset = {};
});


using express call routes to post to db
