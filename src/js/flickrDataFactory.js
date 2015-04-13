(function() {
	'use strict';
	angular
		.module('app')
			.factory('flickrDataFactory', flickrDataFactory);

	// returns a FlickrData object which it populates once the data has arrived
	function flickrDataFactory($http) {
		return {
			http: $http,
			flickrUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK',
			getData: getData
		}
		
		// private 
		function getData() {
			var ret = new FlickrData();
			this.http.jsonp(this.flickrUrl)
				.success(function(data, status, headers, config) {
					ret.setValue(data);
				})
				.error(function(data, status, headers, config) {
					ret.setValue(null);
				});
			return ret;
		}
	}

	function FlickrData() {
		this.SUCCESS = "SUCCESS";
		this.FAILURE = "FAILURE";
		this.PENDING = "PENDING";
		this.status = this.PENDING;
		this.setValue = setValue;
		
		//private
		function setValue(value) {
			this.value = value;
			this.status = value ? this.SUCCESS : this.FAILURE;
		}
	}
}());
