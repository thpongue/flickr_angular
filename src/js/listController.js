(function() {
	'use strict';
	angular
		.module('app')
			.controller('listController', listController)

	function listController(flickrDataService) {
		var vm = this;
		vm.flickrData = null;
		vm.loadData = function() {
			vm.flickrData = flickrDataService.getData();
		}
	};

}());
