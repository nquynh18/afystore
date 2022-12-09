'use strict';

angular.module("AFYShop.aboutus", [])
    .controller("aboutus", function($scope,$http)
    {
        $http.get("assets/json/about.json")
        .then(function(response){
            $scope.AboutList = response.data;
            console.log(response.data);
        })
    });