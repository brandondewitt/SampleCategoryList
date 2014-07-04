'use strict';

describe('Service: MainCategory', function () {

  // load the service's module
  beforeEach(module('categoryListingApp'));

  // instantiate service
  var MainCategory;
  beforeEach(inject(function (_MainCategory_) {
    MainCategory = _MainCategory_;
  }));

  it('should do something', function () {
    expect(!!MainCategory).toBe(true);
  });

});
