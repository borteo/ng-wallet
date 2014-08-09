
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

    var ADD    = '+';
    var REMOVE = '-';

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'partials/wallet.html',
      link: function( scope, element, attribute ) {

        scope.currencies = [
          {
            "active": true,
            "val": "Euro",
            "symbol": "€"
          }, {
            "active": false,
            "val": "GBP",
            "symbol": "£"
          }
        ];
        scope.activeCurrency = scope.currencies[0];
        scope.transitions    = [];
        scope.total          = 0;

        scope.setCurrency = function( index ) {
          // already selected
          if ( scope.currencies[ index ].active ) {
            return;
          }

          for ( var i = 0, nodes = scope.currencies.length; i < nodes; i++ ) {
            scope.currencies[ i ].active = false;
          }
          scope.currencies[ index ].active = true;
          scope.activeCurrency = scope.currencies[index];
        };

        scope.addAmount = function() {
          var amount = 10;
          scope.total += scope.amout;

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
