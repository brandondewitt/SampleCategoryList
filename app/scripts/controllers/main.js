'use strict';

angular.module('categoryListingApp')
  .controller('MainCtrl', function ($scope, Category, $location) {
      Category.get(function(res) {
        $scope.categories = res.categories;
      });

      $scope.go = function( path ) {
        $location.path(path);
      };
  });
