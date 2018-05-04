var express = require("express");
var app = express();

app.get("/", function(req,res) {
    res.send("Welcome to my second express assignment!");
});

app.get("/speak/:animal", function(req,res) {
    var inputAnimal = req.params.animal.toLowerCase();
    //add toLowercase to make sure it can handle all cases
    /* if(inputAnimal==='pig') {
        res.send("The "+ inputAnimal + " says oink.");
    } else if (inputAnimal==='cow') {
        res.send("The "+ inputAnimal + " says moooo.");
    } else if (inputAnimal==='dog') {
        res.send("The "+ inputAnimal + " says woof.");
    } else {
        res.send("I don't know how to speak "+ inputAnimal + " yet.");
    }
    */ 
    //instead, define a dictionary of key-value pairs
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof",
    }
    var sound = sounds[inputAnimal];
    res.send("The " + inputAnimal + " says " + sound);
})
//could also do this by setting a sound variable in the if statement 
//instead of repeating

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var num = Number(req.params.number);
    var phrase = "";   
    for (var i = 0; i<num; i++) {
            phrase += word + " ";
    }
    res.send(phrase);
    //res.send only happens once, so don't write a loop in it
}); 

app.get("*", function(req, res) {
    res.send("Not sure what you're doing here, but it doesn't exist.")
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.")
});