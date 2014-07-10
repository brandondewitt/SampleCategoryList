'use strict';

describe('Controller: SearchCtrl', function () {

  // load the controller's module
  beforeEach(module('categoryListingApp'));

  var SearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchCtrl = $controller('SearchCtrl', {
      $scope: scope
    });
  }));

  it('should start with an empty keyword', function () {
    expect(scope.keyword).toBe('');
  });

  it('should default TotalPages to 0', function () {
    expect(scope.TotalPages).toBe(0);
  });

  it('should default currentPage to 0', function () {
    expect(scope.currentPage).toBe(0);
  });

  it('should set an empty list of products', function () {
    expect(scope.products.length).toBe(0);
  });
});
