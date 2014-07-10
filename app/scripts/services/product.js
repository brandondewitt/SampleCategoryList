'use strict';

angular.module('categoryListingApp')
  .factory('Product', function ($resource) {
      return $resource('http://localhost:3000/api/categories/:maincategoryid/:categoryid/:subcategoryid/products');
  });
