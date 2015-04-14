(function() {
	'use strict';
	angular
		.module('app')
			.controller('detail_view_controller', detailViewController)

	function detailViewController(flickrDataService) {
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
