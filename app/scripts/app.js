'use strict';

angular.module('interestDatingApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise("/main");

  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: '/views/main.html',
  })
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
  })

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"]; 
  // $httpProvider.interceptors.push('authInterceptor');

})
.constant('API_URL', 'http://localhost:3000/');

