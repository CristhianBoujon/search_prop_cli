angular.module("shared")
	.controller("galleryController", ['$scope', 'codingObjectService', 'BASE_URL', '$state', 'Lightbox', 
		function($scope, codingObjectService, BASE_URL, $state, Lightbox){

			$scope.openLightboxModal = function (index) {
				Lightbox.openModal($scope.images, index);
			};

		}]);