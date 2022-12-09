'use strict';

angular.module("AFYShop.typefilter", [])
    .controller("typefilter", function($scope,$http,$routeParams,$filter)
    {
        $scope.nametype = $routeParams.name;
        $scope.title = $scope.nametype;
        $scope.productorder = "name";
        $http.get("assets/json/product.json")
        .then(function(response)
        {
            var data = response.data;
            $scope.typelist=$filter('filter')(data,function(product){
				return $filter('filter')(product.type, {name: $scope.nametype}).length;
			});
            console.log($scope.typelist);
            })
    })