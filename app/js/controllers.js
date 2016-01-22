'use strict';

/* Controllers */
(function() {
    angular.module('phonecatControllers', [])
        .controller('PhoneDetailCtrl', PhoneDetailCtrl)
        .controller('PhoneListCtrl', PhoneListCtrl);

    PhoneDetailCtrl.$inject = ['$routeParams', 'Phone', '$log'];
    function PhoneDetailCtrl($routeParams, Phone, $log) {
        var vm = this;
        vm.isEditing = false;
        vm.mainImageUrl = '';
        vm.phone = {};
        vm.save = savePhone;
        vm.setImage = function(imageUrl) {
            vm.mainImageUrl = imageUrl;
        };

        Phone.getPhone($routeParams.phoneId).then(getPhoneSuccess, getPhoneFailure);

        function getPhoneFailure(err) {
            $log.error("err", err);
        }

        function getPhoneSuccess(phone) {
            $log.log(phone.data);
            vm.phone = phone.data;
            vm.setImage(vm.phone.images[0]);
        }

        function savePhone(phone) {
            //Phone.update({phoneId: phone._id}, phone, function(result) {
            //    if(result['0'] == 1) {
            //        vm.isEditing = false;
            //    } else {
            //        $log.error('Error while saving');
            //    }
            //});
        }
    }

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
