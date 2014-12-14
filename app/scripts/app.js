'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .controller('AppCtrl', function($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
      $scope.sidebaropen = $mdSidenav('left').isOpen();
    };
    $scope.toggleRight = function() {
      $mdSidenav('right').toggle();
    };
  })
  .controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
    $scope.close = function() {
      $mdSidenav('left').close();
      $scope.sidebaropen = $mdSidenav('left').isOpen();
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/alerts', {
        templateUrl: 'views/alerts.html',
        controller: 'AlertsCtrl'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'TabsCtrl'
      })
      .when('/ui', {
        templateUrl: 'views/ui.html',
        controller: 'UICtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });