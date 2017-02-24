angular.module('property.entity', ['shared'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                        .state('property', {
                            url: '/property',
                            templateUrl: 'components/entity/property/property.html',
                            controller: 'propertyController'})
                        .state('property.office', {
//                            controller: 'propertyController',
                            templateUrl: 'components/entity/office/office.html',
                        })
                        .state('property.house', {
//                            controller: 'propertyController',
                            templateUrl: 'components/entity/house/house.html',
                        })
                        .state('property.field', {
                            controller: 'fieldController',
                            templateUrl: 'components/entity/field/field.html',
                        })
                        .state('property.apartment', {
//                            controller: 'landController',
                            templateUrl: 'components/entity/house/house.html',
                        })
                        .state('propertyShow', {
                            url: "/:entityType/:id",
                            controller: 'showPropertyController',
                            templateUrl: 'components/entity/property/show.html',
                        })
                        .state('propertyShow.apartment', {
                            controller: 'showApartmentController',
                            templateUrl: 'components/entity/apartment/show.html',
                        })
                        .state('propertyShow.house', {
                            controller: 'showHouseController',
                            templateUrl: 'components/entity/house/show.html'
                        })                        
                //entityStateProvider.create($stateProvider, [{entityType: 'apartment'}, {entityType: 'house'}]);
            }]);