'use strict';

describe('Controller: CategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('categoryListingApp'));

  var CategoryCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('http://localhost:3000/api/categories/102/10240')
      .respond({categories: [{}]});

    $httpBackend.expectGET('http://localhost:3000/api/categories/102/10240/products?page=0')
      .respond({products: [{}]});

    scope = $rootScope.$new();

    CategoryCtrl = $controller('CategoryCtrl', {
      $scope: scope,
      $routeParams: {
        maincategory: 102,
        category: 10240
      }
    });
  }));

  it('should attach an empty list of products to the scope', function () {
    expect(scope.products.length).toBe(0);
  });

  it('should default TotalPages to 0', function () {
    expect(scope.TotalPages).toBe(0);
  });

  it('should default currentPage to 1', function () {
    expect(scope.currentPage).toBe(1);
  });

  it('should not have categories on the scope', function () {
    expect(scope.categories).toBeUndefined();
  });

  it('should populate the list of products and add categories to the scope', function () {
    $httpBackend.flush();
    expect(scope.products.length).toBe(1);
    expect(scope.categories.length).toBe(1);
  });
});
