'use strict';

/* Controllers */
(function() {
    angular.module('PhoneDetailCtrl', [])
        .controller('PhoneDetailCtrl', PhoneDetailCtrl);

    PhoneDetailCtrl.$inject = ['$routeParams', '$log', 'PhoneDetails'];
    function PhoneDetailCtrl($routeParams, $log, PhoneDetails) {
        var vm = this;
        vm.isEditing = false;
        vm.mainImageUrl = '';
        vm.phone = {};
        vm.save = savePhone;
        vm.setImage = function(imageUrl) {
            vm.mainImageUrl = imageUrl;
        };

        PhoneDetails
            .get({phoneId: $routeParams.phoneId})
            .$promise
            .then(getPhoneSuccess)
            .catch(getPhoneFailure);

        function getPhoneFailure(err) {
            $log.error("err", err);
        }

        function getPhoneSuccess(phone) {
            $log.log("phone", phone);
            if (phone) {
                vm.phone = phone;
                vm.setImage(vm.phone.images[0]);
            }
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
})();
