// Services
weatherApp.service('cityService', function() {   
    this.city = 'New York, NY';
});

weatherApp.service('weatherService', [ '$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { 
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherAPI.get({appid: "2ab327be8eaf8e007c2dcf3c976cb681", q: city, cnt: days });
        
    }
    
}]);