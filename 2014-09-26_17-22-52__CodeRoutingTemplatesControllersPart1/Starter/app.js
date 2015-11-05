var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second/', {
         templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
         templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
             
});

myApp.service('nameService', function() {
    
    var self = this;
    this.name = 'John Doe';
    this.namelength = function() {
    
        return self.name.length;
    
    };
    
});


myApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function($scope, $location, $log, nameService) {
    
    $scope.person ={
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11211'
    }
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
        
    };
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        
        nameService.name = $scope.name;
        
    })
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
    $log.main = 'Property of Main';
    $log.log($log);  
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function($scope, $location, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        
        nameService.name = $scope.name;
        
    })
    
    $log.main = 'Property of Second';
    $log.log($log); 
    
}]);

myApp.directive("searchResults", function() {
    
    return {  
        restrict: 'AECM', 
        templateUrl: 'directives/searchresults.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        }
    }   
})



















