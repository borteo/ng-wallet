
/* Directives */

var dir = angular.module('ngWallet.directives', []);

dir.directive('navigationBar', [
  '$rootScope',
  function( $rootScope ) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/navigation-bar.html',
      link: function( scope, element, attribute ) {

      }
    };
  }
]);

dir.directive('wallet', [
  '$rootScope',
  function( $rootScope ) {

    var ADD    = 'add';
    var REMOVE = 'remove';

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/wallet.html',
      link: function( scope, element, attribute ) {

        scope.transitions = [];
        scope.total       = 0;



        scope.addAmount = function() {
          var amount = 10;
          scope.total += amount;
          
          scope.transitions.push({
            "type": ADD,
            "amount": amount,
            "date": new Date()
          });
        };

        scope.removeAmount = function() {
          var amount = 10;
          scope.total -= amount;

          scope.transitions.push({
            "type": REMOVE,
            "amount": amount,
            "date": new Date()
          });
        };

      }
    };
  }
]);
