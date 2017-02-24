angular.module("property.home", [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider.state("home", {
                    url: "/",
                    templateUrl: 'components/home/home.html',
                    controller: "homeController"
                });
            }]);