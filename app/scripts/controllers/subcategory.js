'use strict';

angular.module('categoryListingApp')
  .controller('SubcategoryCtrl', function ($scope, Category, Product, $routeParams) {
    $scope.TotalPages = 0;
    $scope.currentPage = 0;
    $scope.products = [];

    $scope.fetchProducts = function() {
        if ($scope.TotalPages === 0 || $scope.currentPage < $scope.TotalPages) {
          Product.get({maincategoryid: $routeParams.maincategory, categoryid: $routeParams.category, subcategoryid: $routeParams.subcategory, page: $scope.currentPage++}, function(res) {
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
