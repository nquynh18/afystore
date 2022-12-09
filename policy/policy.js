'use strict';

angular.module("AFYShop.policy", [])
    .controller("policy", function($scope,$http)
    {
        $http.get("assets/json/policy.json")
        .then(function(response){
            $scope.PolicyList = response.data;
            console.log(response.data);
        })
    });