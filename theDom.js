//welcome to the DOM
//everything is stored inside of the object

//big object #document
//how we can use javascript to make this more interactive

//SELECT and MANIPULATE
var h1 = document.querySelector("h1"); //select
h1.style.color = "pink"; //manipulate
//manually one at a time, do NOT do it for multiple elements

var body = document.querySelector("body"); //select
var isBlue = false;

/*setInterval(function() {
	if (isBlue) {
		body.style.background = "white"; //need to put quotes
	} else {
		body.style.background = "#3498db";
	};
	isBlue = !isBlue;
}	,1000);
*/
//change an element's style, adding classes, changing attributes, changing tag

//style property is one way to manipulate an element's style

//IF YOU NEED TO CHANGE MULTIPLE PROPERTIES
//build a class in CSS that looks like this
//.someclass {
	//attributes u want to change

//write that in your CSS file
var h2 = document.getElementById("h2");
/*
tag.classList.add("someclass") //all of that class you wrote will be applied to the tag

//classList is VERY USEFUL
//make sure you define a class you want in CSS
tag.classList.add("someclass") //add a class to the selected element
tag.classList.remove("someclass") //remove a class
tag.classList.toggle("someclass") //if it isn't there it removes, if not it turns it on
//classList is NOT an array
*/


//javascript turns on and off the CSS

document.url;
document.head;
//all the METHODS live in the document
//document is an OBJECT
var firstBullet = document.getElementsByClassName("highlight");
var tags = document.getElementsByClassName("big");
console.log(tags); //produces a lightweight array, can't do a forEach loop, called a node
//actually returns OBJECTS
//document.getElementById();
var hello = document.getElementsByTagName("h2");
console.log(hello); // returns JAVASCRIPT properties
//queryselector is the OG
var highlight = document.querySelector(".big"); //only gives us the first one
//give query selector a CSS id, class, or html tag
//use # or . before the id/class
//li a.special <-- selects all lis on page with special class on anchor tag
//alternative is querySelectorAll
//this returns THEM ALL
//also returns javascript objects in a listlike NODE
var paraOne = document.querySelector("p");
console.log(paraOne.textContent);
//.textContent of that javascript object prints out the text
//you can modify text content - just be careful because you'll rip out whatever else is inside
console.log(paraOne.innerHTML);
//innerHTML is LIKE textContent but preserves the text content
//don't use this to actually change HTML stuff there are other ways!

//if you select one thing, it comes out as just a string intead of a node

//MANIPULATING ATTRIBUTES
var linkUpdate = document.querySelector("a");
linkUpdate.getAttribute("href");
linkUpdate.setAttribute("href", "http://www.facebook.com");

var imgPic = document.querySelector("img");
imgPic.getAttribute("src");
imgPic.setAttribute("src", "weirdgenetics.png");

//can't do setAttribute for multiple items at the same time

//if you want to do this in LOTS. WRITE FOR LOOPS

//events are all over the place in javascript - everything that is interactive
//select an element (the first button, h1, etc)
//attach a listener to that button
//need to select, then manipulate by adding an event listener

//two arguments
//type is what you're listening for
//that second function is called a callback
//element.addEventListener (type,functionToCall);
//can have more than one listener on a given element

/* was interfering with something else 
var lis = document.querySelectorAll("li");
for(var i =0; i<lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";});
}
*/

 //don't need to use anonymous function, can pass another function in, don't include brackets with that       

 var buttonBackChange = document.querySelector("button");

 /*
 var bodyColour = document.querySelector("body");
 buttonBackChange.addEventListener("click", function() {
 	if (bodyColour.style.background=="white"){
 		bodyColour.style.background = "blue";
 	} else {
 		bodyColour.style.background = "white";
 	}

 });
 */

 //a better way to handle this is to make a boolean
 //bodyColour.style.background = true or false
 //set it to true or false after you make a page

 //an EVEN BETTER WAY
 //it will add and take away that class! 

buttonBackChange.addEventListener("click", function() {
 	document.body.classList.toggle("purple");
 });

//different types of events - MDN has a WebEvents page of recognized events
//change - can use with input
//clicks
//double click
//keypress
//hover - mouseOver
//mouseOut

var firstLink = document.querySelectorAll(".first")

for(var i = 0; i<firstLink.length;i++) {
	firstLink[i].addEventListener("mouseover",function() {
		this.classList.add("selected");
		//better to toggle and add/remove classes then use JavaScript to play with individual styling
	})
	firstLink[i].addEventListener("mouseout",function() {
		this.classList.remove("selected");
	})
	firstLink[i].addEventListener("click",function(){
		this.classList.toggle("done");
})

}
//this keyword inside of inside eventlistener that event was originally triggered on
//in this case, that's firstLink
//don't need to add [i] after this


/*
firstLink.addEventListener("mouseover",function() {
	firstLink.style.color = "green";
})
firstLink.addEventListener("mouseout",function() {
	firstLink.style.color = "black";
})
*/
