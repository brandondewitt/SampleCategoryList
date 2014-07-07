'use strict';

angular.module('categoryListingApp')
  .controller('SearchCtrl', function ($scope, Search, $location) {
    $scope.keyword = '';
    $scope.TotalPages = 0;
    $scope.currentPage = 0;
    $scope.products = [];

    $scope.find = function(keyword, event) {

      if (event.keyCode === 27) {
        return $scope.close();
      }

      $scope.currentPage = 0;
      $scope.products = [];

      if ( keyword.length >= 3 ) {
        $scope.keyword = keyword;
        $scope.fetchProducts();
      }
    };

    $scope.fetchProducts = function() {
      if ($scope.keyword !== '') {
        if ($scope.TotalPages === 0 || $scope.currentPage <= $scope.TotalPages) {
          Search.get({keyword: $scope.keyword, page: $scope.currentPage++}, function(res) {
            if ($scope.TotalPages === 0) {
              $scope.TotalPages = Math.ceil(res.total / 10);
            }

            angular.forEach(res.products, function(product) {
              $scope.products.push(product);  
            });

          });
        }
      }
    };

    $scope.close = function() {
      $location.path('/');
    };
  });
