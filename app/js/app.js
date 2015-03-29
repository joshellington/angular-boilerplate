// The beginning
angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('detail', {
    url: '/detail',
    templateUrl: 'views/detail.html',
    controller: 'DetailCtrl'
  });

  $urlRouterProvider.otherwise('/');
});

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);