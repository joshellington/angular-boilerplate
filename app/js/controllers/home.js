angular.module('myApp.controllers')

.controller('HomeCtrl', function($scope, ExampleService) {
  ExampleService.getIp().then(function(data) {
    $scope.ip = data.ip;
  });
});