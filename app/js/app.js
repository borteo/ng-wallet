'use strict'

var wallet = angular.module('ngWallet', [
  'ngRoute',
  // 'ngWallet.filters',
  // 'ngWallet.services',
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
