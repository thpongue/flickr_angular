
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
		this.flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';
	}

	FlickrDataService.prototype.getData = function() {
//		this.http.get(this.flickrUrl);
		return new FlickrData();
	}

	function FlickrData() {
		this.value = [{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		},{
			photoUrl: 'photoUrl',
			postTitle: 'postTitle',
			postAuthor: 'postAuthor',
			publishDate: 'publishDate',
			flickrLink: 'flickrLink'
		}];
	}
}());

