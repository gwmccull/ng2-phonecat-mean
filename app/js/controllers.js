'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
	  $scope.isEditing = false;

	  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }

	  $scope.save = function(phone) {
		  Phone.update({phoneId: phone._id}, phone, function(result) {
			  if(result['0'] == 1) {
				  $scope.isEditing = false;
			  } else {
				  console.error('Error while saving');
			  }
		  });
	  };
  }]);
