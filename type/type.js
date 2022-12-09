'use strict';

angular.module("AFYShop.type", [])
    .controller("type", function($scope,$http)
    {
        $http.get("assets/json/type.json")
        .then(function(response){
            $scope.TypeList = response.data;
            console.log(response.data);
        })
    });