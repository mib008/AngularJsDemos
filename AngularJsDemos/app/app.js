'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', '$locationProvider', '$sceProvider', 'tplProvider', function ($routeProvider, $locationProvider, $sceProvider, tplProvider) {
    $routeProvider.when('/customerImage', { templateUrl: 'welcome.html' })
        .otherwise({ redirectTo: 'index.html' });


    $locationProvider.html5Mode(true);
}]);