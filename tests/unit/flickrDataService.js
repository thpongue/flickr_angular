describe('placeholder unit test', function() {
	var sut;
	 
  beforeEach(module('app'));
  beforeEach(inject(function (flickrDataService) {
		sut = flickrDataService;
  }));

	it('should exist', function () {
		expect(sut).not.toBeNull();
	});

	it('should return a FlickrData object', function () {
		expect(sut.getData()).not.toBeNull();
	});
});
