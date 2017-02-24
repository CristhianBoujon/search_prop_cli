angular.module('property.entity')
        .controller('propertyController', [
            '$scope',
            '$state',
            'propertyResourceService',
            'Upload',
            '$timeout',
            'BASE_URL',
            function ($scope, $state, propertyResourceService, Upload, $timeout, BASE_URL) {
                $scope.files = [];

                // Property Model
                $scope.property = {services: [], images: []};

                $scope.propertyResource = propertyResourceService.create('property');
                $scope.propertyTypes = $scope.propertyResource.getTypes();
                $scope.propertyType;

                $scope.$watch('propertyType', function () {
                    if ($scope.propertyType) {
                        $scope.specificPropertyResource = propertyResourceService.create($scope.propertyType);
                        $state.go('property.' + $scope.propertyType);
                    }
                });
                $scope.save = function () {
                    $scope.specificPropertyResource.save($scope.property);
                }

                $scope.uploadFiles = function (files, errFiles) {
                    $scope.files = files;
                    $scope.errFiles = errFiles;
                    angular.forEach(files, function (file) {
                        file.upload = Upload.upload({
                            url: BASE_URL + 'api/images/upload',
                            data: {file: file}
                        });
                        file.upload.then(function (response) {
                            $timeout(function () {
                                $scope.property.images.push(response.data.id);                         
                            });
                        }, function (response) {
                            if (response.status > 0)
                                $scope.errorMsg = response.status + ': ' + response.data;
                        }, function (evt) {
                            file.progress = Math.min(100, parseInt(100.0 *
                                    evt.loaded / evt.total));
                            console.log(file.progress);
                        });
                    });
                }
            }]);