'use strict';

angular.module("AFYShop.login", [])
    .controller("login", function($scope,$http)
    {
        $http.get("assets/json/login.json")
        .then(function(response){
            $scope.login = response.data;
            console.log(response.data);
        })
    });