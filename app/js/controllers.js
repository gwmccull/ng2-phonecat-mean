'use strict';

/* Controllers */
(function() {
    angular.module('phonecatControllers', [])
        .controller('PhoneDetailCtrl', PhoneDetailCtrl)
        .controller('PhoneListCtrl', PhoneListCtrl);

    PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];
    function PhoneDetailCtrl($routeParams, Phone) {
        var vm = this;
        vm.isEditing = false;

        vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            vm.mainImageUrl = phone.images[0];
        });
        vm.save = savePhone;
        vm.setImage = function(imageUrl) {
            vm.mainImageUrl = imageUrl;
        };

        function savePhone(phone) {
            Phone.update({phoneId: phone._id}, phone, function(result) {
                if(result['0'] == 1) {
                    vm.isEditing = false;
                } else {
                    console.error('Error while saving');
                }
            });
        }
    }

    PhoneListCtrl.$inject = ['Phone'];
    function PhoneListCtrl(Phone) {
        var vm = this;
        vm.phones = Phone.query();
        vm.orderProp = 'age';
    }
})();
