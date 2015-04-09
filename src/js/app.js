
(function() {
	angular.module('app', [])
		.controller('listController', listController)
		.service('flickrDataService', FlickrDataService);

	function listController(flickrDataService) {
		this.flickrData = null;
		this.loadData = function() {
			this.flickrData = flickrDataService.getData();
		}
	};

	// returns a FlickrData object which it populates once the data has arrived
	function FlickrDataService($http) {
		this.http = $http;
		this.flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';
	}

	FlickrDataService.prototype.getData = function() {
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

	function FlickrData() {
		this.SUCCESS = "SUCCESS";
		this.FAILURE = "FAILURE";
		this.PENDING = "PENDING";
		this.status = this.PENDING;

		this.setValue = function(value) {
			this.value = value;
			this.status = value ? this.SUCCESS : this.FAILURE;
		}
		
	}
}());

