'use strict';
(function() {
    angular.module('phonecatAnimations', ['ngAnimate'])
        .animation('.phone', phone);

    function phone() {
        return {
            addClass: animateUp,
            removeClass: animateDown
        };

        function animateDown(element, className, done) {
            if(className !== 'active') {
                return;
            }
            element.css({
                position: 'absolute',
                left: 0,
                top: 0
            });

            jQuery(element).animate({
                top: -500
            }, done);

            return function(cancel) {
                if(cancel) {
                    element.stop();
                }
            };
        }

        function animateUp(element, className, done) {
            if(className !== 'active') {
                return;
            }
            element.css({
                position: 'absolute',
                top: 500,
                left: 0,
                display: 'block'
            });

            jQuery(element).animate({
                top: 0
            }, done);

            return function(cancel) {
                if(cancel) {
                    element.stop();
                }
            };
        }
    }
})();
