var app = angular.module("myapp", []);
app.controller("myctrl",function($scope, $http)
{
    $http.get("order.json").then(function(response) 
    {
        $scope.order = response.data;
    });
});

// var app = angular.module('myapp', []);
        
//         app.controller("myctrl", function($scope, $http) {
//             $scope.displaydata = function() {
//             $http.get("order.json").success(function(data) {
//                 $scope.order = data;
//             });
//         }
//         });