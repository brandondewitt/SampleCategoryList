'use strict';

/**
 * @ngdoc function
 * @name categoryListingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the categoryListingApp
 */
angular.module('categoryListingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
