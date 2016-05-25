var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: "HomeController"
  })
  $routeProvider
    .when('/lyra', {
      templateUrl: '/views/lyra.html',
      controller: "HomeController"
    })
    .when('/mo', {
      templateUrl: '/views/mo.html',
      controller: "HomeController"
    })
    .when('/blue', {
      templateUrl: '/views/blue.html',
      controller: "HomeController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
