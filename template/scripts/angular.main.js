var TutorialApp = angular.module('TutorialApp', ['ngSanitize']);

TutorialApp.controller('TutorialController', function ($scope) {
  $scope.module = Config;
});
