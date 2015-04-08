
(function() {
	console.log("app.js called");
	angular.module('app', [])
		.controller('listController', listController)
		.service('flickrDataService', FlickrDataService);

	function listController(flickrDataService) {
		this.items = [{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		},{
			photoUrl: 'dummy data',
			postTitle: 'dummy data',
			postAuthor: 'dummy data',
			publishDate: 'dummy data',
			flickrLink: 'dummy data'
		}];
	};

	// returns a FlickrData object which it populates once the data has arrived
	function FlickrDataService($http) {
		this.http = $http;
		this.flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';
	}

	FlickrDataService.prototype.getData = function() {
		this.http.get(this.flickrUrl);
		return new FlickrData();
	}

	function FlickrData() {

	}
}());

