var express = require("express");
var app = express();

app.get("/", function (request, response) {
    //req and res are actually objects
    response.send("Hi there!");
} );  //two parameters, first URL, second is a callback function to run

app.get("/bye", function(req,res) {
    res.send("Bye! Thanks for coming!");
});

app.get("/dogs", function(req,res) {
    res.send("we like doggies!");
});

//this code would go to whatever the subredditName is
//so this way there aren't separate .get for each subreddit
app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit + " centre!");
});
//anything that follows this subreddit pattern will return this message
//r/soccer/people would NOT work because it has to be a single word

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params); // can print out those things we changed above
    console.log(req.route);
    //this lets you change up the subredditName, id, and title
    //without having multiple get requests
    res.send("welcome to the COMMENTS page, exciting...")
});

//put this afterwards - order of routes matters
//first one that matches is the ONLY one that's run
app.get("*", function(req,res) {
    res.send("you're a star, but this isn't the right page.");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});
//listen on a particular port on a particular IP for something happening
//