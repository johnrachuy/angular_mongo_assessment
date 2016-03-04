myApp.controller('EntryController', ['$scope', '$http', function($scope, $http) {

    //getPowerNames();

    $scope.power_name = [
        {type: 'invisibility', label: 'Invisibility'},
        {type: 'flight', label: 'Flight'},
        {type: 'super_speed', label: 'Super Speed'},
        {type: 'heat_vision', label: 'Heat Vision'},
        {type: 'super_strength', label: 'Super Strength'},
        {type: 'accelerated_healing', label: 'Accelerated Healing'},
        {type: 'power_blast', label: 'Power Blast'},
        {type: 'animal_affinity', label: 'Animal Affinity'}
    ];

    //function getPowerNames() {
    //    $http.get('/power_names').then(function(response) {
    //        $scope.power_name = response.data;
    //        console.log($scope.power_name);
    //    });
    //}

    $scope.savePost = function() {
        var post = {
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power,
            power_name: $scope.power_name
        };

        $http.post('/hero', post).then(function(response) {
            $scope.post = response.data;
            $scope.alias = '';
            $scope.first_name = '';
            $scope.last_name = '';
            $scope.city = '';
            $scope.primary_power = '';
            $scope.power_name = '';
        });
    };

    console.log('Entry Controller');
}]);