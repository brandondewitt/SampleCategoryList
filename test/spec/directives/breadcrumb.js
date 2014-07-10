'use strict';

describe('Directive: breadcrumb', function () {

  // load the directive's module
  beforeEach(module('categoryListingApp'));

  var scope,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('views/breadcrumbs.html')
      .respond('');

    $httpBackend.expectGET('http://localhost:3000/api/categories/102')
      .respond({categories: [{}]});

    $httpBackend.expectGET('http://localhost:3000/api/categories/102/10240')
      .respond({categories: [{}]});

    scope = $rootScope.$new();

    $routeParams = {
      maincategory: 102,
      category: 10240
    };

  }));

  it('should have a list of crumbs');

  it('should add categories to list of crumbs');
});
