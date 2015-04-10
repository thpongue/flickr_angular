describe('placeholder unit test', function() {
	var sut = null;
	var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';
	var mock;

	beforeEach(function() {
		module('app');
	
		mock = {
    	jsonp: function() {
				return {
					success: function() {
						return this;
					},
					error: function() {
						return this;
					}
				}
      }
    };

    spyOn(mock, 'jsonp').and.callThrough();	

		module(function($provide) {
			$provide.value('$http', mock);
		});
	});

	beforeEach(inject(function ($injector) {
		sut = $injector.get('flickrDataFactory');
	}));

	it('should exist', function () {
		expect(sut).not.toBeNull();
	});
	
	it('should return a FlickrData object and call the flickr url to populate the object', function () {
		var flickrData = sut.getData();
		expect(flickrData).not.toBeNull();
		expect(mock.jsonp).toHaveBeenCalledWith(flickrUrl);
	});
});
