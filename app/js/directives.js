
/* Directives */

var directives = angular.module('ngWallet.directives', []);

// notification system
directives.directive('notification', [
  '$timeout',
  function( $timeout ) {
    return {
      restrict: 'E',
      templateUrl: 'partials/notification.html',
      link: function( scope, elem, attrs ) {

        scope.$on('SEND_NOTIFICATION', function( event, message ) {
          scope.active       = true;
          scope.notification = message;

          // remove error after 3s
          $timeout(function() {
            scope.active = false;
          }, 3000);
        
        });
        
      }
    };
  }
]);

directives.directive('navigationBar', [
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


directives.directive('wallet', [
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

        var isNumber = function() {
          if ( isNaN( scope.amount ) ) {
            scope.$emit( 'SEND_NOTIFICATION', 'please insert a value' );
            return false;
          }
          return true;
        };

        var pushTransition = function( type ) {
          scope.transitions.push({
            "type": type,
            "amount": scope.amount,
            "date": new Date()
          });
        };

        scope.addAmount = function() {
          if ( !isNumber() ) {
            return;
          }
          scope.total += scope.amount;
          pushTransition( ADD );
        };

        scope.removeAmount = function() {
          if ( !isNumber() ) {
            return;
          }
          scope.total -= scope.amount;
          pushTransition( REMOVE );
        };

      }
    };
  }
]);
