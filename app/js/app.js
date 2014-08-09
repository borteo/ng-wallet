'use strict'

var wallet = angular.module('ngWallet', [
  'ngRoute',
  'ngStorage',
  'ngWallet.directives',
  'ngWallet.controllers'
]);


wallet.config([
  '$routeProvider',
  function( $routeProvider ) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html',
      controller: 'WalletController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
  }
]);
