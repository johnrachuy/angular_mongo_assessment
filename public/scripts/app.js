var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/hero_entry.html',
            controller: 'EntryController'
        })
        .when('/hero_listing', {
            templateUrl: '/views/templates/hero_listing.html',
            controller: 'ListingController'
        })
        .otherwise({
            redirectTo: 'home'
        });


}]);