(function() {
	'use strict';
	angular
		.module('app')
			.controller('list_view_controller', listViewController)

	function listViewController(flickrDataService) {
		// view model
		var vm = this;

		// bindable properties
		if (!vm.flickrData) {
			vm.flickrData = flickrDataService.getData();
		}
	};

}());
