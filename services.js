// SERVICES

//cityService
weatherApp.service('cityService', function() {
    
    this.city = "New York, NY";
    
});

//weatherService
weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days) {
        // E.j.: http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});

        return weatherAPI.get({q: city, units: "metric", cnt: days });
    };
    
}]);