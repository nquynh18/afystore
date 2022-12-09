'use strict';

angular.module("AFYShop.product", [])
    .controller("product", function($scope,$http)
    {
        $http.get("assets/json/product.json")
        .then(function(response){
            $scope.ProductList = response.data;
            console.log(response.data);
        })
    });