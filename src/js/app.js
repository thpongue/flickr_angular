
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

	function FlickrDataService($http) {
		this.http = $http;
		console.log("FlickrDataService created"); 
	}

	FlickrDataService.prototype.getData = function(url) {
		this.http.get(url);
		return new FlickrData();
	}

	function FlickrData() {

	}
}());

