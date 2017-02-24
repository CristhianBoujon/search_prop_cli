'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ui.router',
    'ngResource',
    'platanus.inflector',
    'property.entity',
    'property.home',
    'searchResult', 
    'shared',
    'ngFileUpload',
    'rzModule',
    'ngTouch',
    'bootstrapLightbox',
    'ui.bootstrap'
])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                app.stateProvider = $stateProvider;
//                $urlRouterProvider.otherwise('/');
//                $stateProvider
//
//
//                        .state('home', {
//                            url: '/',
//                            templateUrl: 'components/entity/house/house.html'
//                        });
            }])
        .constant('BASE_URL', 'http://localhost:3000/');;