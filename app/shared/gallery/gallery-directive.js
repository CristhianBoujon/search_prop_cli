angular.module("shared")
	.directive('gallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'shared/gallery/gallery.html',
			controller: 'galleryController',
			scope: {
				images: '='
			}
		}

	})