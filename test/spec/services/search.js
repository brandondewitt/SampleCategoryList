'use strict';

describe('Service: search', function () {

  // load the service's module
  beforeEach(module('categoryListingApp'));

  // instantiate service
  var Search;
  beforeEach(inject(function (_Search_) {
    Search = _Search_;
  }));

  it('should do something', function () {
    expect(!!Search).toBe(true);
  });

});
