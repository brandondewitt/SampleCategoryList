'use strict';

angular.module('categoryListingApp')
  .controller('CategoryCtrl', function ($scope, Category, Product, $routeParams) {
    $scope.TotalPages = 0;
    $scope.currentPage = 0;
    $scope.products = [];

    Category.get({maincategoryid: $routeParams.maincategory, categoryid: $routeParams.category}, function(res) {
      $scope.categories = res.categories;
    });

    $scope.fetchProducts = function() {
        if ($scope.TotalPages === 0 || $scope.currentPage <= $scope.TotalPages) {
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
