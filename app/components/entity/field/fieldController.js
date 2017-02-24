angular.module("property.entity")
        .controller('fieldController', ['$scope', function ($scope) {
                $scope.fieldTargets = $scope.specificPropertyResource.fieldTargets();
                $scope.property.targets = [];

                $scope.targetChanged = function (id) {
                    var index = $scope.property.targets.indexOf(id)
                    if (index > -1) {
                        $scope.property.targets.splice(index, 1);
                    }
                    else {
                        $scope.property.targets.push(id);
                    }
                }
            }]);