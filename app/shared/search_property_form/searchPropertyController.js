angular.module('shared')
.controller('searchPropertyController', ['$scope', 'propertyResourceService', '$state', 'codingObjectService',
	function($scope, propertyResourceService, $state, codingObjectService){

		$scope.q.min_price = (!$scope.q.min_price) ? 3000 : $scope.q.min_price;
		$scope.q.max_price = (!$scope.q.max_price) ? 8000 : $scope.q.max_price;
		
		var propertyResource = propertyResourceService.create('property');
        $scope.propertyTypes = propertyResource.getTypes();

	    $scope.price_slider_config = {
	        options: {
	            ceil: 40000,
	            floor: 2000,
	            step: 500,
	            translate: function (value) {
	                return '$' + value;
	            }
	        }
	    };

	    $scope.send_query = function(){

	    	var filtered_q = {};

	    	for(key in $scope.q){
	    		if($scope.q[key]){ // Filtro las propiedades seteadas en false.
	    			filtered_q[key] = $scope.q[key];
	    		}
	    	}

	    	$state.go($scope.transitionTo, {q: codingObjectService.encode(filtered_q)});
	    }

	}
])
