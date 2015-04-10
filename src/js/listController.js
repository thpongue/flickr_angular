(function() {
	'use strict';
	angular.module('app')
		.controller('listController', listController)

	function listController(flickrDataService) {
		this.flickrData = null;
		this.loadData = function() {
			this.flickrData = flickrDataService.getData();
		}
	};

}());
