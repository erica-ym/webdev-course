var request = require("request");

//can put just about any URL in this first parameter
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
        console.log(typeof(body)); // it's a STRING! 
        var parsedData =JSON.parse(body); //NEED to convert to object! 
        console.log(typeof(parsedData));
        var sunsetTime = parsedData["query"]["results"]["channel"]["astronomy"]["sunset"];
        console.log("Sunset Time in Hawaii is " + sunsetTime);
    }
});

//gives you yahoo weather API data

//invalid URL 
/* request('www.gogogogogogogoogog.com', function(error, response, body) {
    if (error) {
        console.log("Something went wrong.");
        console.log(error);
    } else if (!error && response.statusCode == 200) {
        console.log(body); //the actual response body
    }
}) */
