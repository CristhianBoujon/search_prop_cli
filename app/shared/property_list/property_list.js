angular.module("shared")
	.directive('propertyList', function(){
		return {
			restrict: 'E',
			templateUrl: 'shared/property_list/property_list.html',
			controller: 'propertyListController',
			scope: {
				properties: '='
			}
		}

	})