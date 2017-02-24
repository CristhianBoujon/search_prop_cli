angular.module("property.home")
        .controller("homeController", ['$scope', 'propertyResourceService', 
            function ($scope, propertyResourceService) {
            	$scope.query = {};
                //$scope.properties = propertyResource.getLastPublications();

            }]);