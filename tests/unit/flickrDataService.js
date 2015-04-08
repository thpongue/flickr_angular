describe('placeholder unit test', function() {
	var sut = null;
	var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';
	var mock;

	beforeEach(function() {
		module('app');
		
		mock = jasmine.createSpyObj('$http', ['get'])
		module(function($provide) {
			console.log('$provide = ' + $provide);
			$provide.value('$http', mock);
		});
	});

  beforeEach(inject(function ($injector) {
		sut = $injector.get('flickrDataService');
  }));

	it('should exist', function () {
		expect(sut).not.toBeNull();
	});
	
	it('should sychronously return a FlickrData object and call the flickr url to populate the object', function () {
		var flickrData = sut.getData();
		expect(flickrData).not.toBeNull();
		expect(mock.get).toHaveBeenCalledWith(flickrUrl);
	});
});
