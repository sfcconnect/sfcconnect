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
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
