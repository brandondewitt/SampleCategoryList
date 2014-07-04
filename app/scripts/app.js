'use strict';

angular
  .module('categoryListingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/:maincategory', {
        templateUrl: 'views/maincategory.html',
        controller: 'MaincategoryCtrl'
      })
      .when('/:maincategory/:category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/:maincategory/:category/:subcategory', {
        templateUrl: 'views/subcategory.html',
        controller: 'SubcategoryCtrl'
      })
      .when('/breadcrumbs', {
        templateUrl: 'views/breadcrumbs.html',
        controller: 'BreadcrumbsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
