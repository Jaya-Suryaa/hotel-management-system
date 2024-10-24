angular.module('hotelApp').controller('RoomController', function($scope, $http) {
  $scope.rooms = [];
  $scope.newRoom = {};

  // Function to fetch existing rooms
  $scope.getRooms = function() {
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
        $scope.rooms.push(response.data);
        $scope.newRoom = {}; // Reset form
      })
      .catch(error => {
        console.error('Error adding room:', error);
      });
  };

  // Function to delete a room
  $scope.deleteRoom = function(roomId) {
    if (confirm('Are you sure you want to delete this room?')) {  // Optional confirmation dialog
      $http.delete(`http://localhost:5000/api/rooms/${roomId}`)
        .then(response => {
          // Filter out the deleted room from the array
          $scope.rooms = $scope.rooms.filter(room => room._id !== roomId);
          console.log('Room deleted:', response.data);
        })
        .catch(error => {
          console.error('Error deleting room:', error);
          alert('Failed to delete room: ' + error.data.message);  // Show an error message
        });
    }
  };

  // Initialize by fetching rooms
  $scope.getRooms();
});
