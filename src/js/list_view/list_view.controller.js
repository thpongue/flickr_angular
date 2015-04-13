(function() {
	'use strict';
	angular
		.module('app')
			.controller('listController', listController)

	function listController(flickrDataService) {
		// view model
		var vm = this;

		// bindable properties
		vm.flickrData = null;
		vm.loadData = loadData;
		
		// private
		function loadData() {
			vm.flickrData = flickrDataService.getData();
		}
	};

}());
