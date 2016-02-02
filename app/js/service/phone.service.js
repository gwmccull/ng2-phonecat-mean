'use strict';

/* Services */
(function() {
    angular
        .module('phonecatServices', ['ngResource'])
        .factory('Phones', Phones)
        .factory('PhoneDetails', PhoneDetails);

    PhoneDetails.$inject = ['$resource'];
    function PhoneDetails($resource) {
        return $resource('/api/phone-details/:phoneId');
    }

    Phones.$inject = ['$resource'];
    function Phones($resource) {
        return $resource('/api/phones');
    }
})();
