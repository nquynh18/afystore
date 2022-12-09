'use strict';

angular.module("AFYShop.compare",[])
.controller("compare",function($scope,$http)
{
    $http.get("assets/json/product.json")
    .then(function(response)
    {
        $scope.CompareList = response.data;
        console.log(response.data);
    })
})