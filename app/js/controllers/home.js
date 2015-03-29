angular.module('myApp.controllers', [])

.controller('HomeCtrl', function($scope) {
  $scope.title = "Current time: " + new Date();
});