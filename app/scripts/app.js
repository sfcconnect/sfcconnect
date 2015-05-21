'use strict';

/**
 * @ngdoc overview
 * @name connectApp
 * @description
 * # connectApp
 *
 * Main module of the application.
 */
angular
  .module('connectApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/group', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .otherwise({
        redirectTo: '/map'
      });
  });
