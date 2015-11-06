weatherApp.controller('homeController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        
    })
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { 
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({appid: "2ab327be8eaf8e007c2dcf3c976cb681", q: $scope.city, cnt: $scope.days });
    
   $scope.convertToFahrenheight = function(degK) {
       
       return Math.round((1.8 * (degK - 273)) + 32);
       
   }
   
   $scope.convertToDate = function(dt) {
       
       return new Date(dt * 1000);
       
   }
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        
    })
    
}]);