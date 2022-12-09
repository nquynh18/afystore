'use strict';

angular.module("AFYShop.brand", [])
    .controller("brand", function($scope,$http)
    {
        $http.get("assets/json/brand.json")
        .then(function(response){
            $scope.BrandList = response.data;
            console.log(response.data);
        })
    });