'use strict';

/* Controllers */
(function() {
    angular.module('PhoneListCtrl', [])
        .controller('PhoneListCtrl', PhoneListCtrl);

    PhoneListCtrl.$inject = ['Phones', '$log'];
    function PhoneListCtrl(Phones, $log) {
        var vm = this;
        vm.phones = [];
        vm.orderProp = 'age';

        Phones
            .query()
            .$promise
            .then(success, failure);

        function failure(err) {
            $log.error("err", err);
        }

        function success(phones) {
            $log.log(phones);
            vm.phones = phones;
        }
    }
})();
