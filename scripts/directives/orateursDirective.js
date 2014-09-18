var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agOrateurs', ['$window', function($window) {
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
			},
			templateUrl: './views/orateurs.html'
		};
	}])
;
