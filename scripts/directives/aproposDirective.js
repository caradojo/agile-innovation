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
					              photourl:'http://www.camptocamp.org/images/378896/fr/grenoble-sous-les-etoiles',
					              desc: 'Grenoble sous les étoiles',
					              ownername:'Benoit Audige',
					              ownerurl:'http://www.camptocamp.org/users/11491',
					              licencename:'CC-by-SA',
					              licenceurl:'http://creativecommons.org/licenses/by-sa/3.0/deed.fr'              
					              },
					              {
					              photourl:'http://www.camptocamp.org/images/241031/fr/un-matin-au-mont-rose',
					              desc: 'Un matin au mont rose',
					              ownername:'Jean-Louis Decosse',
					              ownerurl:'http://www.camptocamp.org/users/13874',
					              licencename:'CC-by-SA',
					              licenceurl:'http://creativecommons.org/licenses/by-sa/3.0/deed.fr'              
					              }
					             ];
			},
			templateUrl: './views/apropos.html'
		};
	}])
;
