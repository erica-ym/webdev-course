var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static("public"));
//tells express to serve the content in the public directory
//need this so that it knows automatically that those files need to be there
app.set("view engine", "ejs");

app.get("/", function(req,res) {
    res.render("home");
    //don't make in same directory, make new views directory and put it there
    //res.send("Welcome to the homepage.");
})

var friends = ["Colin", "Kayla", "Mikaela", "Tanya"];

app.get("/friends", function(req, res) {
    res.render("friends", {friends: friends});
});

//use a post route whenever you want to ADD data to the database!
app.post("/addfriend", function(req,res) {
    var newFriend = req.body.newfriend; //object that contains all data from request body
    friends.push(newFriend);
    //res.send("You have reached the post route!");
    res.redirect("/friends"); //this runs the code inside of the friends route app.get
});


app.get("/fallinlovewith/:thing", function(req,res) {
    var thing = req.params.thing;
    res.render("love", {thingVar:thing});
    //pass variables in as an OBJECT ^^ 
    //need to pass js variables INTO html 
    //needs to exist in VIEWS directory within the parent folder
})

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post Initial", name: "Sam"},
        {title: "My amazing friend", name: "Suzy"},
        {title: "How to kick butt", name: "Abbie"},
        ]
    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is listening.")
})