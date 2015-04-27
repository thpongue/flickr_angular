describe('list view controller test', function() {
	var sut = null;

	beforeEach(function() {
		module('app');
	});
	
	beforeEach(inject(function ($controller, flickrDataService) {
		sut = $controller('list_view_controller', flickrDataService);
	}));

	it('should populate flickrData object when loadData is called', function() {
		expect(sut.flickrData).toBe(null);
		sut.loadData();						
		expect(sut.flickrData).not.toBe(null);
		// test that it is the correct type? valid test?
//		console.log(FlickrData);
//		console.log(sut.flickrData);
//		expect(sut.flickrData).toBe(jasmine.any(FlickrData));
	});
});
