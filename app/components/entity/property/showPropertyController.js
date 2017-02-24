angular.module("property.entity")
	.controller("showPropertyController", ['$scope', '$stateParams', 'propertyResourceService', 'BASE_URL', 'Lightbox', '$state',
		function($scope, $stateParams, propertyResourceService, BASE_URL, Lightbox, $state){
			$scope.property = {}
			$scope.images = []

			$state.go('propertyShow.' + $stateParams.entityType);
			
			propertyResourceService.create($stateParams.entityType).get({id: $stateParams.id}, function(property){
				$scope.property = property;

				$scope.property.images.forEach(function(image){
					$scope.images.push({url: BASE_URL + image.url, thumbUrl: BASE_URL + image.thumb128x128.url})
				});
			});

			$scope.openLightboxModal = function (index) {
				Lightbox.openModal($scope.images, index);
			};

	}]);