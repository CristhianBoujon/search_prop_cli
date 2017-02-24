angular.module("searchResult")
	.controller("searchResultController", ['$scope', '$location', 'propertyResourceService', 'codingObjectService', 'BASE_URL',
		function($scope, $location, propertyResourceService, codingObjectService){
			
			$scope.query = codingObjectService.decode($location.search().q);
			$scope.properties = [];

			var propertyResource = propertyResourceService.create('property');

			propertyResource.find($scope.query,
				function(properties){
					$scope.properties = properties;
				});

	        $scope.propertyTypes = propertyResource.getTypes();

	        $scope.hasResult = function(){
	        	return $scope.properties.length > 0
	        }
	}]);