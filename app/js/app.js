'use strict';

//import {Component, Injectable, Inject, EventEmitter, Input, Output, bootstrap} from 'ng-forward';
//import 'angular';
//import 'reflect-metadata';
import {Component, bootstrap} from 'ng-forward';

@Component({
    selector: 'app',
    providers: ['ngRoute'],
    directives: [],
    template: `
        <h1>App</h1>
        <nested></nested>
        <p>Trigger count: {{ ctrl.triggers }}</p>

        <h4>One Way Binding to Child:</h4>
        <input ng-model="ctrl.message1"/>

        <h4>Two Way Binding to/from Child:</h4>
        <input ng-model="ctrl.message2"/>

        <hr/>
        <inner-app (event1)="ctrl.onIncrement()" (event2)="ctrl.onIncrement()"
                   [message1]="ctrl.message1" [(message2)]="ctrl.message2" message3="Hey, inner app... nothin'">
        </inner-app>
    `
})

class AppCtrl {
    constructor(){
        this.triggers = 0;
        this.message1 = 'Hey, inner app, you can not change this';
        this.message2 = 'Hey, inner app, change me';
        //console.log(ngRoute)
    }

    onIncrement(){
        this.triggers++;
    }
}

bootstrap(AppCtrl);


(function() {
    angular.module('phonecatApp', [
            'ngRoute',
            'phonecatAnimations',
            'PhoneListCtrl',
            'PhoneDetailCtrl',
            'phonecatFilters',
            'phonecatServices'
        ])
        .config(['$routeProvider', '$locationProvider', routeProvider]);

    function routeProvider($routeProvider, $locationProvider) {
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

        $locationProvider.html5Mode(true);
    }
})();
