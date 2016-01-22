'use strict';

(function() {
    angular.module('phonecatApp', [
            'ngRoute',
            'phonecatAnimations',
            'phonecatControllers',
            'phonecatFilters',
            'phonecatServices'
        ])
        .config(['$routeProvider', routeProvider]);

    function routeProvider($routeProvider) {
        $routeProvider
            .when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl as PhoneList'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl as PhoneDetail'
            })
            .otherwise({
                redirectTo: '/phones'
            });
    }
})();
