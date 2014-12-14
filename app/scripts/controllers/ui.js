'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('app')
  .controller('UICtrl', function ($scope) {
   	$scope.data = {
	    group1 : 'Banana',
	    group2 : '3'
	  };
	$scope.radioData = [
	    { label: '1', value: '1' },
	    { label: '2', value: '2' },
	    { label: '3', value: '3' }
	];
alert
	$scope.addItem = function() {
	    var r = Math.ceil(Math.random() * 1000);
	    $scope.radioData.push({ label: r, value: r });
	};
	$scope.removeItem = function() {
	    $scope.radioData.pop();
	};
	$scope.data = {};
	$scope.data.cb1 = true;
	$scope.data.cb2 = false;
	$scope.data.cb3 = false;
	$scope.data.cb4 = false;
	$scope.data.cb5 = false;

	$scope.active = true;
	  $scope.toggleColor = function() {
	    $scope.active = !$scope.active;
	};
   });