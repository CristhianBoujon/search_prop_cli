angular.module("shared", [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                        .state('list', {
                            url: '/list?q',
                            templateUrl: 'shared/property_list/property_list.html',
                            controller: 'propertyListController'})
            }]);