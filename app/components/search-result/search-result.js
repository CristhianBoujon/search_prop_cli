angular.module("searchResult", [])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider.state("search-result", {
                    url: "/search-result?q",
                    templateUrl: 'components/search-result/search-result.html',
                    controller: "searchResultController"
                });
            }]);