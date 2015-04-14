(function() {
	'use strict';
	angular
		.module('app')
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'list_view_controller',
				templateUrl: 'partials/list_view.html'
			})
			.when('/detail_view/:index', {
				controller: 'detail_view_controller',
				templateUrl: 'partials/detail_view.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
}());
