'use strict';

/* Services */
(function() {
    angular
        .module('phonecatServices', ['ngResource'])
        .factory('Phone', Phone);

    Phone.$inject = ['$resource'];
    function Phone($resource){
        return $resource(
            '/api/phonelist/:phoneId',
            {},
            {
                query: {
                    method: 'GET',
                    isArray: true,
                    cache: false
                },
                update: {
                    method: 'PUT'
                }
            }
        );
    }
})();
