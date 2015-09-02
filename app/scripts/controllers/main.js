'use strict';

/**
 * @ngdoc function
 * @name zorkgularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zorkgularApp
 */
angular.module('zorkgularApp')
	.controller('MainCtrl', function($scope, commands) {

		$scope.messages = [];
		$scope.messages[0] = langEn.myRoom;

		var _order = '';
		$scope.cmd = {
			order: function(newOrder) {
       			return arguments.length ? (_order = newOrder) : _order;
			}
		}

		$scope.command = function() {
			$scope.messages.push(commands.orders($scope.cmd.order()));
			// clean console
			$scope.cmd.order('');
		};

	});