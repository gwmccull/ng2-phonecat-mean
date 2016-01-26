'use strict';

/* Controllers */
(function() {
    angular.module('PhoneListCtrl', [])
        .controller('PhoneListCtrl', PhoneListCtrl);

    PhoneListCtrl.$inject = ['Phone', '$log'];
    function PhoneListCtrl(Phone, $log) {
        var vm = this;
        vm.phones = [];
        vm.orderProp = 'age';

        Phone.getPhones().then(success, failure);

        function failure(err) {
            $log.error("err", err);
        }

        function success(phones) {
            $log.log(phones.data)
            vm.phones = phones.data;
        }
    }
})();
