(function() {
	'use strict';
	angular
		.module('app')
			.factory('flickrDataService', flickrDataService);

	// returns a FlickrData object which it populates once the data has arrived
	function flickrDataService($http) {
		return {
			http: $http,
			flickrUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
			getData: getData
		}

		var flickrData;
		
		// private 
		function getData() {
			if (!flickrData) {
				flickrData = new FlickrData();
				this.http.jsonp(this.flickrUrl)
					.success(function(data, status, headers, config) {
						flickrData.setValue(data);
					})
					.error(function(data, status, headers, config) {
						flickrData.setValue(null);
					});
			}
			return flickrData;
		}
	}
}());
