(function() {
	'use strict';
	angular
		.module('app')
			.controller('detail_view_controller', detailViewController)

	function detailViewController(flickrDataService, $routeParams, $sce) {
		this.index = $routeParams.index;

		// view model
		var vm = this;

		// bindable properties
		vm.flickrData = flickrDataService.getData();
		vm.renderHtml = renderHtml;

		// what this does is a bit mental. It pulls the contents of the third paragraph from the html description. Its the nearest thing to a description that I can find in the text.
		// js capturing groups work in a really annoying way - you have to loop (it ignores the global parameter) and the captured group is the 2nd element in an array!!??
		function renderHtml(code) {
			// capture the contents of all p tags
			var regex = /<p>(.*?)<\/p>/gm;
			var result;
			// get the third one - I know its wierd but then flickr should not bury this data in the middle of some html
			for (var i=0; i<=2; i++) {
				result = regex.exec(code);   
			}
			return $sce.trustAsHtml(result && result[1] ? result[1] : "no description provided");
		}
	};

}());
