var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
	$http.get("products.json").then(function(response) {
		$scope.products = response.data;
	});
});