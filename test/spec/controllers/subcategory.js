'use strict';

describe('Controller: SubcategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('categoryListingApp'));

  var SubcategoryCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('http://localhost:3000/api/categories/102/10240/1024001/products?page=0')
      .respond({products: [{}]});

    scope = $rootScope.$new();

    SubcategoryCtrl = $controller('SubcategoryCtrl', {
      $scope: scope,
      $routeParams: {
        maincategory: 102,
        category: 10240,
        subcategory: 1024001
      }
    });
  }));
  
  it('should default TotalPages to 0', function () {
    expect(scope.TotalPages).toBe(0);
  });

  it('should default currentPage to 1', function () {
    expect(scope.currentPage).toBe(1);
  });

  it('should attach a list of products to the scope', function () {
    $httpBackend.flush();
    expect(scope.products.length).toBe(1);
  });
});
