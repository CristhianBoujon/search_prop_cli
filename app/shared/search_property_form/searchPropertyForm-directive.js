angular.module('shared')
	.directive('searchPropertyForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'shared/search_property_form/search-property-form.html',
			controller: "searchPropertyController",
			scope: {
				q: '=',
				transitionTo: '='
			}
		}
	})
