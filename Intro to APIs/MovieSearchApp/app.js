/* General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 
Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 
USE THESE! 
*/

var express = require("express");
var request = require("request");
var app = express();

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server for movie app is listening.")
})

app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    var search = req.query.searchWord;
    var url = 'http://www.omdbapi.com/?s=' + search + '&apikey=thewdb';
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var movieData = JSON.parse(body)
            res.render("results", {movieData: movieData})
            //if you just show the object, it won't work, you need to LOOP through it
            //res.send(movieData["Search"][0]["Title"]);
            }
    })
});

app.get("/", function(req,res) {
    res.render("search");
})