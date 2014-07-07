'use strict';

angular.module('categoryListingApp')
  .controller('MaincategoryCtrl', function ($scope, Category, $routeParams) {
      var BreadCrumbs = [];

      $scope.breadcrumbs = BreadCrumbs;

      Category.get({maincategoryid: $routeParams.maincategory}, function(res) {
        $scope.categories = res.categories;
      });

      Category.get(function(res) {
        var MainCategory = res.categories.filter(function(category) {
          return String(category.MainCategoryId) === String($routeParams.maincategory);
        })[0];

        $scope.breadcrumbs.push({label: MainCategory.MainCategoryName, url: '#/' + $routeParams.maincategory, active: 'active'});
      });
  });
