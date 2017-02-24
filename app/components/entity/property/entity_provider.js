angular.module("property.entity")
	.provider("entityState", function(){

		var stateProvider;
		var entities;

		this.create = function(stateProv, ent){
			stateProvider = stateProv;
			entities = ent;
		}	

		function EntityState(stateProvider, entities){
			
			entities.forEach(function(entityParams){
				this.show(entityParams);
			});

			this.show = function(params){

				// convert entityType to capital case
				var ccentityType = params.entityType.charAt(0).toUpperCase() + params.entityType.slice(1).toLowerCase();

				// convert entityType to capital case
				var lcentityType = params.entityType.toLowerCase();  

				var stateName = (params.parentState) ? params.parentState + "." + lcentityType : lcentityType;
				
				if(!stateExists(stateName)) {
					stateProvider.state(stateName, {
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
		}

		this.$get = function(){
			return new EntityState(stateProvider, entities);
		}
	});