angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('SelectPicCtrl', function($scope, PetService) {
  $scope.pets = PetService.all();

  $scope.launchPhotoLibrary = function() {
    navigator.camera.getPicture( cameraSuccess, cameraError,
                                { sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY } );
  };
  function cameraSuccess(imageURI) {
    $scope.image = document.getElementById('myImage');
    if (imageURI.substring(0,21)=="content://com.android") {
      var photo_split=imageURI.split("%3A");
      imageURI="content://media/external/images/media/"+photo_split[1];
    }
    $scope.image.src = imageURI;
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
