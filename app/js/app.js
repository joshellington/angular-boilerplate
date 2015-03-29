// The beginning
angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: "/",
    templateUrl: "views/home.html",
    controller: 'HomeCtrl'
  });

  $urlRouterProvider.otherwise('/');
});