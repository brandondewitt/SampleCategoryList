'use strict';

angular.module('categoryListingApp')
  .directive('breadcrumb', function ($routeParams, Category) {
    return {
      templateUrl: 'views/breadcrumbs.html',
      restrict: 'E',
      controller: function($scope) {
        $scope.crumbs = [{
          url: '#',
          text: 'Home',
          active: false,
          displayOrder: 0
        }];

        if($routeParams.maincategory) {
          Category.get(function(res) {
            var category = res.categories.filter(function(c) {
              return Number(c.MainCategoryId) === Number($routeParams.maincategory);
            })[0];

            if($routeParams.category) {
              $scope.crumbs.push({
                url: '#/' + $routeParams.maincategory,
                text: category.MainCategoryName,
                active: false,
                displayOrder: 1
              });
            } else {
              $scope.crumbs.push({
                url: '#/' + $routeParams.maincategory,
                text: category.MainCategoryName,
                active: true,
                displayOrder: 1
              });
            }
          });
        }

        if($routeParams.category) {
          Category.get({maincategoryid: $routeParams.maincategory}, function(res) {
            var category = res.categories.filter(function(c) {
              return Number(c.CategoryId) === Number($routeParams.category);
            })[0];

            if($routeParams.subcategory) {
              $scope.crumbs.push({
                url: '#/' + $routeParams.maincategory + '/' + $routeParams.category,
                text: category.CategoryName,
                active: false,
                displayOrder: 2
              });
            } else {
              $scope.crumbs.push({
                url: '#/' + $routeParams.maincategory + '/' + $routeParams.category,
                text: category.CategoryName,
                active: true,
                displayOrder: 2
              });
            }
          });
        }

        if($routeParams.subcategory) {
          Category.get({maincategoryid: $routeParams.maincategory, categoryid: $routeParams.category}, function(res) {
            var category = res.categories.filter(function(c) {
              return Number(c.SubCategoryId) === Number($routeParams.subcategory);
            })[0];

            $scope.crumbs.push({
              url: '#/' + $routeParams.maincategory + '/' + $routeParams.category + '/' + $routeParams.subcategory,
              text: category.SubCategoryName,
              active: true,
              displayOrder: 3
            });
          });
        }

        $scope.predicate = 'displayOrder';

      }
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the breadcrumb directive');
//      }
    };
  });
