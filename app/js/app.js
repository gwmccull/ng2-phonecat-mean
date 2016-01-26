'use strict';

(function() {
    angular.module('phonecatApp', [
            'ngRoute',
            'phonecatAnimations',
            'PhoneListCtrl',
            'PhoneDetailCtrl',
            'phonecatFilters',
            'phonecatServices'
        ])
        .config(['$routeProvider', routeProvider]);

    function routeProvider($routeProvider) {
        $routeProvider
            .when('/phones', {
                templateUrl: 'js/phone-list/phone-list.html',
                controller: 'PhoneListCtrl as PhoneList'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'js/phone-detail/phone-detail.html',
                controller: 'PhoneDetailCtrl as PhoneDetail'
            })
            .otherwise({
                redirectTo: '/phones'
            });
    }
})();
