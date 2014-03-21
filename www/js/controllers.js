angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('SelectPicCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();

  $scope.launchPhotoLibrary = function() {
    console.log('button clicked');
    navigator.camera.getPicture( cameraSuccess, cameraError,
                                { destinationType: navigator.camera.DestinationType.FILE_URI,
                                  sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY } );
  };
  function cameraSuccess(imageURI) {
    console.log(imageURI);
    $scope.image = document.getElementById('myImage');
    $scope.image.src = imageURI;
    //$scope.image.src = "img/ionic.png";
    console.log($scope.image.src);
  }
  function cameraError(message) {
    alert('Failed because: ' + message);
  }
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
