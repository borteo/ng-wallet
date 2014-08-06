'use strict'


var wallet = angular.module('ngWallet', [
  'ngRoute',
  // 'ngWallet.filters',
  // 'ngWallet.services',
  // 'ngWallet.directives',
  'ngWallet.controllers'
]);


wallet.config([
  '$routeProvider',
  function( $routeProvider ) {
    $routeProvider.when('/intro', {
      templateUrl: 'partials/intro.tpl.html'
    });

    $routeProvider.when('/wallet', {
      templateUrl: 'partials/wallet.tpl.html',
      controller: 'WalletController'
    });

    $routeProvider.otherwise({redirectTo: '/intro'});
  }
]);
