describe('list view controller test', function() {

	it('should populate flickrData using the flickrDataService when loadData is called', function() {
		expect(mockFlickrDataService.getData).toHaveBeenCalled();
		expect(sut.flickrData).toEqual(jasmine.any(FlickrData));
	});


	// ----------------------------------
	// setup
	// ----------------------------------

	var sut = null;
	var mockFlickrDataService;
	
	beforeEach(setupMocks);
	beforeEach(initSut);

	function setupMocks() {
		module('app');

		mockFlickrDataService = {
			getData: function() {
				return new FlickrData();
			}
    };

    spyOn(mockFlickrDataService, 'getData').and.callThrough();	

		module(function($provide) {
			$provide.value('flickrDataService', mockFlickrDataService);
		});
	}
	
	function initSut() {
		inject(function ($controller, flickrDataService) {
			sut = $controller('list_view_controller', flickrDataService);
		})
	}
});
