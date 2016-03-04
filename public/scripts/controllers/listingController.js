myApp.controller('ListingController', ['$scope', '$http', function($scope, $http) {

    getHeroes();

    //function getPowerNames() {
    //    $http.get('/hero_power').then(function(response) {
    //        $scope.power_name = response.data;
    //        console.log($scope.power_name);
    //    });
    //}

    function getHeroes() {
        $http.get('/hero').then(function(response) {
            $scope.heroes = response.data;
            console.log($scope.heroes);
        });
    }

    $scope.delete = function(id) {
        console.log(id);
        $http.delete('/hero/' + id).then(function(response) {
            getHeroes();
            console.log(response.data);
        });
    };

    console.log('Listing Controller');
}]);