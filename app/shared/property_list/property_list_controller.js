angular.module("shared")
	.controller("propertyListController", ['$scope', 'codingObjectService', 'BASE_URL', '$state',
		function($scope, codingObjectService, BASE_URL, $state){
			$scope.base_url = BASE_URL;

			$scope.show = function(propertyType, id){
//	        	$state.go('propertyShow.' + propertyType.toLowerCase(), {entityType: propertyType.toLowerCase(), id: id});
	        	$state.go('propertyShow', {entityType: propertyType.toLowerCase(), id: id});	        	
	        }
		}]);