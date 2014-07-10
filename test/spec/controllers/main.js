'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('categoryListingApp'));

  var MainCtrl,
    scope,
    $httpBackend;


  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();

    $httpBackend.expectGET('http://localhost:3000/api/categories')
      .respond({categories: [{}]});

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of categories to the scope', function () {
    $httpBackend.flush();
    expect(scope.categories.length).toBe(1);
  });
});
