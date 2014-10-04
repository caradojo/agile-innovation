var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agApropos', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.emails = [
						            {
						            addr:'inscription', 
						            desc: 'pour les inscriptions à la conférence'
						            },
						            {
						            addr:'contact', 
						            desc: 'pour toute autre question au sujet de la conférence'
						            }
						        ];
				$scope.credits = [
					              {
					              photourl:'http://pierrick-boyer.com',
					              desc: 'Photographies de montagne',
					              ownername:'Pierrick Boyer',
					              ownerurl:'http://pierrick-boyer.com'
								  }
					             ];
			},
			templateUrl: './views/apropos.html'
		};
	}])
;
