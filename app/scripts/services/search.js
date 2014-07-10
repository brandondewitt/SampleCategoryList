'use strict';

angular.module('categoryListingApp')
  .factory('Search', function ($resource) {
    return $resource('http://localhost:3000/api/search/:keyword');
  });
