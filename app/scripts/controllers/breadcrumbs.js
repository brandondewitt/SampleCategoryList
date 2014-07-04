'use strict';

angular.module('categoryListingApp')
  .controller('BreadcrumbsCtrl', function ($scope, Category, $routeParams) {
    $scope.BreadCrumbs = {};
    Category.get(function(res) {
      $scope.BreadCrumbs.MainCategory = res.categories.filter(function(category) {
        return category.MainCategoryId === $routeParams.maincategory;  
      });
    });

    Category.get({maincategoryid: $routeParams.maincategory}, function(res) {
      $scope.BreadCrumbs.Category = res.categories.filter(function(category) {
        return category.CategoryId === $routeParams.category;  
      });
    });

  });
