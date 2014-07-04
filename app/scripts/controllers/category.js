'use strict';

angular.module('categoryListingApp')
  .controller('CategoryCtrl', function ($scope, Category, Product, $routeParams) {
    $scope.TotalPages = 0;
    $scope.currentPage = 0;
    $scope.products = [];

    var BreadCrumbs = [];

    BreadCrumbs.push({label: 'Home', url: '/#', active: false});

    $scope.breadcrumbs = BreadCrumbs;

    Category.get({maincategoryid: $routeParams.maincategory, categoryid: $routeParams.category}, function(res) {
      $scope.categories = res.categories;
    });

    Category.get(function(res) {
      var MainCategory = res.categories.filter(function(category) {
        return String(category.MainCategoryId) === String($routeParams.maincategory);
      })[0];

      $scope.breadcrumbs.push({label: MainCategory.MainCategoryName, url: '#/' + $routeParams.maincategory, active: false});
    });

    Category.get({maincategoryid: $routeParams.maincategory}, function(res) {
      var Current = res.categories.filter(function(category) {
        return String(category.CategoryId) === String($routeParams.category);
      })[0];

      $scope.breadcrumbs.push({label: Current.CategoryName, url: '#/' + $routeParams.category, active: 'active'});
    });

    $scope.fetchProducts = function() {
        if ($scope.TotalPages === 0 || $scope.currentPage < $scope.TotalPages) {
          Product.get({maincategoryid: $routeParams.maincategory, categoryid: $routeParams.category, page: $scope.currentPage++}, function(res) {
            if ($scope.TotalPages === 0) {
              $scope.TotalPages = Math.ceil(res.total / 10);
            }

            angular.forEach(res.products, function(product) {
              $scope.products.push(product);  
            });
          });
        }
    };

    $scope.fetchProducts();
  });
