(function() {
	'use strict';
	angular
		.module('app')
			.controller('list_view_controller', listViewController)

	function listViewController(flickrDataService) {
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
