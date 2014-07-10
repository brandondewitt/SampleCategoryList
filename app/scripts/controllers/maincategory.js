'use strict';

angular.module('categoryListingApp')
  .controller('MaincategoryCtrl', function ($scope, Category, $routeParams) {
      Category.get({maincategoryid: $routeParams.maincategory}, function(res) {
        $scope.categories = res.categories;
      });
  });
