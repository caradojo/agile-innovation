var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agAccueil', [function(selectMenu) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.accesslist = [
			      {
			        cssid: 'orateur',
			        title: 'Orateurs',
			        image: 'icon_red_speaker',
			        text :'Vous êtes passionné et vous souhaitez partager votre expérience et vos idées avec les participants de la conférence ?',
			        scrolltarget:'orateurs',
			        menuselected: 'orateurs'
			      },
			      {        
			        cssid: 'participant',
			        title: 'Participants',
			        image: 'icon_green_ticket',
			        text :'Vous souhaitez participer à la conférence et vous voulez en savoir plus sur les détails pratiques de celle-ci ?',
			        scrolltarget:'participants',
			        menuselected: 'participants'
			       }
			    ];
			},
			templateUrl: './views/accueil.html'
		};
	}])
;
