describe('list view service', function() {

	it('should return a FlickrData object and call the flickr url to populate the object', function () {
		expect(flickrData).not.toBeNull();
		expect(mockHttp.jsonp).toHaveBeenCalledWith(flickrUrl);
	});

	it('should set the value from the http object on success', function() {
		var val = {};
		successCallback(val);
		expect(flickrData.value).toBe(val);
	});
	
	it('should set the value to null on failure', function() {
		failureCallback();
		expect(flickrData.value).toBe(null);
	});


	// ----------------------------------
	// setup
	// ----------------------------------

	var sut = null;
	var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';
	var mockHttp;
	var successCallback = null;
	var failureCallback = null;
	var flickrData = null;

	beforeEach(setupMocks);
	beforeEach(initSut);

	function setupMocks() {
		module('app');
	
		mockHttp = {
    	jsonp: function() {
				return {
					success: function(successCallbackParam) {
						successCallback = successCallbackParam;
						return this;
					},
					error: function(failureCallbackParam) {
						failureCallback = failureCallbackParam;
						return this;
					}
				}
      }
    };

    spyOn(mockHttp, 'jsonp').and.callThrough();	

		module(function($provide) {
			$provide.value('$http', mockHttp);
		});
	};

	function initSut() {
		inject(function (flickrDataService) {
			sut = flickrDataService;
			flickrData = sut.getData();
		});
	};
});
