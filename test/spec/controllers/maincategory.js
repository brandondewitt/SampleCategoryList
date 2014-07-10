'use strict';

describe('Controller: MaincategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('categoryListingApp'));

  var MaincategoryCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {

    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('http://localhost:3000/api/categories/102')
      .respond({categories: [{}]});

    scope = $rootScope.$new();

    MaincategoryCtrl = $controller('MaincategoryCtrl', {
      $scope: scope,
      $routeParams: {
        maincategory: 102
      }
    });
  }));

  it('should attach a list of categories to the scope', function () {
    $httpBackend.flush();
    expect(scope.categories.length).toBe(1);
  });
});
