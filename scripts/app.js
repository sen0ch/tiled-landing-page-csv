'use strict';

angular.module('ContentApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pasvaz.bindonce'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/tests', {
        templateUrl: 'views/tests.html',
        controller: 'TestsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
