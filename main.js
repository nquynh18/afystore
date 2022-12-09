var AFYShop = angular.module("AFYShop", [
    'ngRoute',
    'AFYShop.product',
    'AFYShop.productdetail',
    'AFYShop.brand',
    'AFYShop.brandfilter',
    'AFYShop.type',
    'AFYShop.typefilter',
    'AFYShop.aboutus',
    'AFYShop.login',
    'AFYShop.policy',
    'AFYShop.compare',
    'AFYShop.menu'
]);

AFYShop.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/",{templateUrl:"product/product.html",controller:"product"})
    .when("/product/:id",{templateUrl:"productdetail/productdetail.html",controller:"productdetail"})
    .when("/brand/:name",{templateUrl:"brandfilter/brandfilter.html",controller:"brandfilter"})
    .when("/type/:name",{templateUrl:"typefilter/typefilter.html",controller:"typefilter"})
    .when("/aboutus",{templateUrl:"aboutus/aboutus.html",controller:"aboutus"})
    .when("/login",{templateUrl:"login/login.html",controller:"login"})
    .when("/policy",{templateUrl:"policy/policy.html",controller:"policy"})
    .when("/compare",{templateUrl:"compare/compare.html",controller:"compare"})
})

angular.module("AFYShop.menu", [])
.controller("menu",['$scope','$location','$route',function($scope, $location, $route) {
    $scope.activePath = null;
    $scope.$on('$routeChangeSuccess', function(){
        $scope.activePath = $location.path();
        console.log($location.path());
    })
}]);