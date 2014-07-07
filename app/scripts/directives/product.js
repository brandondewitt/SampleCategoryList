'use strict';

angular.module('categoryListingApp')
  .directive('product', function () {
    return {
      templateUrl: 'views/product.html',
      restrict: 'EA',
      scope: {
        product: '='
      }
    };
  });
