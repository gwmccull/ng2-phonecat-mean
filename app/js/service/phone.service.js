'use strict';

/* Services */
(function() {
    angular
        .module('phonecatServices', ['ngResource'])
        .factory('Phone', Phone);

    Phone.$inject = ['$http'];
    function Phone($http){
        return {
            getPhones: getPhones,
            getPhone: getPhone
        };

        function getPhone(phoneId) {
            return $http.get('phones/' + phoneId + '.json');
        }

        function getPhones() {
            return $http.get('phones/phones.json');
        }
    }
})();
