angular.module("shared")
	.service("propertyState", ['$state', function($state){

		this.show = function(params){

			// convert entityType to capital case
			var ccentityType = params.entityType.charAt(0).toUpperCase() + params.entityType.slice(1).toLowerCase();

			// convert entityType to capital case
			var lcentityType = params.entityType.toLowerCase();  

			var stateName = (params.parentState) ? params.parentState + "." + lcentityType : lcentityType;
			
			if(!stateExists(stateName)) {
				app.stateProvider.state(stateName, {
					url: '/' + lcentityType + '/:id/show',
					controller: 'show' + ccentityType + 'Controller',
					templateUrl: 'components/entity/' + lcentityType + '/show.html'
				});
			}

			return stateName;
		}

		// Check if state exists
		function stateExists(stateName){

			var stateExists = false;

			return $state.get().some(function(state){
						return state.name == stateName
					});
		}

	}]);