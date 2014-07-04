'use strict';

describe('Service: subcategory', function () {

  // load the service's module
  beforeEach(module('categoryListingApp'));

  // instantiate service
  var subcategory;
  beforeEach(inject(function (_subcategory_) {
    subcategory = _subcategory_;
  }));

  it('should do something', function () {
    expect(!!subcategory).toBe(true);
  });

});
