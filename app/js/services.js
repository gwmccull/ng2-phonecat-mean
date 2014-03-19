'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
	  return $resource('/api/phonelist/:phoneId', {}, {
		  query: {
			  method: 'GET',
			  isArray: true,
			  cache: false
		  },
		  update: {
			  method: 'PUT'
		  }

	  });
  }]);
