var spectrum = angular.module('spectrum', []);

// spectrum.controller('spectrumCtrl', function ($scope) {

// spectrum.controller('activityCtrl', function($scope) {

// });

// function activityCtrl($scope) {
//   $scope.activities = [
//     {name:'studying'},
//     {name:'sleepy'},
//     {name:'psyched!'},
//     {name:'bored'},
//     {name:'upset'},
//     {name:'hanging out'},
//     {name:'nostalgic'},
//     {name:'stressed out'},
//     {name:'sexy'},
//     {name:'going out'},
//     {name:'angry'},
//     {name:'kinda lonely'},
//     {name:'procrastinating'},
//     {name:'feeling good!'},
//     {name:'working out'}
//   ];
//   $scope.activity = $scope.activities[0]; 
// };

function activityCtrl($scope) {
  $scope.activity = 'studying';
}

// });