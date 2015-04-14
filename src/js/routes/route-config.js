(function() {
	'use strict';
	angular
		.module('app')
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'listController',
				templateUrl: 'partials/list_view.html'
			})
			.when('/detail_view/:index', {
				controller: 'someControllerMethod',
				templateUrl: 'partials/detail_view.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
}());
