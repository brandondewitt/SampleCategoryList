'use strict';

angular.module('categoryListingApp')
  .factory('Product', function ($resource) {
      return $resource('http://localhost:3000/categories/:maincategoryid/:categoryid/:subcategoryid/products', {}, {
        get: {
          method: 'GET',
          params: {
            page: '@page' 
          }
        }  
      });
  });
