// app.js
const hotelApp = angular.module('hotelApp', []);

hotelApp.controller('RoomController', ['$scope', '$http', function($scope, $http) {
    $scope.rooms = [];
    $scope.newRoom = {};

    // Function to fetch rooms from the server
    $scope.fetchRooms = function() {
        $http.get('http://localhost:5000/api/rooms')
            .then(response => {
                $scope.rooms = response.data;
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
            });
    };

    // Function to add a new room
    $scope.addRoom = function() {
        $http.post('http://localhost:5000/api/rooms', $scope.newRoom)
            .then(response => {
                // Add the newly created room to the room list
                $scope.rooms.push(response.data);
                // Reset the newRoom model
                $scope.newRoom = {};
            })
            .catch(error => {
                console.error('Error adding room:', error);
            });
    };

    // Initial fetch of rooms
    $scope.fetchRooms();
}]);
