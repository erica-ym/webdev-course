//OBJECTS WOO HOO
var person = {
	name: "Erica",
	city: "Toronto",
	age: 19,
}
//made up of key value pairs
//unlike arrays, NO ORDER

//retrieve data w bracket or dot notation
//person.name or person["name"]

//here's when to NOT use dot notation
//1. property starts with a number
//2. property name has a space
//3. when you want to look up property name (someObject[str] will look for str = ... as property)

//reassign just like array

//three ways to make a new object
var dog = {}
//the way we saw above
var personMod = new Object ();
person.name="Sam's Twin"

//can hold ANY kind of data

var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name:"Goyle"},
	],
	color: "baby blue",
	isEvil: true,
}

for(var i=0; i<someObject.friends.length; i++) {
	console.log(someObject.friends[i])
}

var movieDatabase = [
	{title: "Inception", rating: 5, hasSeen: true},
	{title: "Mad Max", rating: 4, hasSeen: false},
	{title: "La Llegada", rating: 5, hasSeen: true},
]

for(var i=0; i<movieDatabase.length; i++) {
	if(movieDatabase[i].hasSeen==true) {
		var opening = "I have seen "
		} else {
		var opening = "I have not seen "
		}
	console.log(opening + movieDatabase[i].title + " and its rating is " + movieDatabase[i].rating)
}


//adding METHODS to an OBJECT
//aka adding FUNCTIONS (a method of a property inside an object)
var person = {
	name: "Erica",
	city: "Toronto",
	age: 19,
	add: function(x,y) {
		return x + y;
	}
}

console.log(person.add(5,105))
//doing this helps you keep your code organized and avoid namespace issues
//name the same function within different functions
//logically split functions up into different objects
//imagine doing it for posts and comments

//functions are values in javascript, u can pass them around

//another really great practice
//a library a just a way to access a bunch of functions that someone else wrote

//example of underscore.js library
//_.functionName -- everything is under the _ library name

var comments = {};
comments.data = ["great!", "what is this even!"]

function print(arr) {
	arr.forEach(function(el) {
		console.log(el);
	});
}; 
//currently not a method, exists outside of the comments objects

print(comments.data);

comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	});
}; 

comments; 






