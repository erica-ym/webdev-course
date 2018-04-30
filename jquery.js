//$("selector goes here")
//works exactly like querySelectorAll in vanilla JavaScript

//always returns the items in a LIST - even if there's only one item
//can select things within other things like $("li a")

//CSS, manipulating style, the .css method
$("selector").css("property", "value")
//instead of passing in properties and values,
//you can pass in objects!!
var styles = {
	backgroundColor: "pink",
	fontWeight: "bold",
	color: "orange",
}
//multiple key value pairs
//jquery is super fast
$("h1").css(styles) 

//can select multiple elements at once like this! 
//grab multiple selectors, and use .css method
//this is AWESOME
$("li.test").css("color", "green")
//vanilla: would need to select all w querySelectorAll
//then write a for loop

//can use objects with multiple objects
//NEED TO USE CAMEL CASE FOR ATTRIBUTES
objStyle = {
	fontSize: "40px",
	border: "3 px dashed purple",
	backgroundColor: "rgba(89,45,20, 0.5)",
};

$("li.test").css(objStyle);

//the div exercise for jQuery


$("div.highlight").css("width", "200px");//only divs w highlight
$("div#third").css("border", "6px solid orange"); //make sure you include solid
$("div:first-of-type").css("color", "pink");
//first-of-type to only get first
//can also select div:first, but it's slightly slower
//how do i get the LAST item?
$("div").last().attr("width")
//this is how! 

//more common jQuery methods
//api.jquery.com has EVERY SINGLE METHOD

//.text() <-- the jQuery version of textContent in vanilla
//if you pass in a value, it will change the text and put that in EVERY single unit
//considered HTML safe, if you pass it html it's gonna stay as text

//.html() <-- gets the html contents of first element
//provide argument and it will update ALL of the elements
//can use this to ADD new tags i.e. will recognize html tags like <a> 
//jQuert version of innerHTML

//.attr() <-- short for attribute
//retrieve and set attributes (by passing into argument)
//one argument: the getter
//two argument: updates the value of every single attribute on every item given
//getter and setter paradigm
//$("img").attr("name","value") -- an example:
$("img").attr("src"); //print the name of the source
$("img").attr("alt", "example of ocean photography");
$("img").attr("width", "80%");
//$("input").attr("type", "checkbox");

//could also change image source - ANY ATTRIBUTE!

//.val() <-- used to get values of form elements
//generally like input, select, checkbox, dropdown menu and textarea
//can also pass in an argument to change the input
$("input").val();
//if you pass in an empty string, you can reset input 

//.addClass(),.removeClass(),.toggleClass
//can assign multiple Classes to multiple Objects
//works almost exactly like vanilla methods, except with MULTIPLE

//EVENTS in jQuery
//look at events section in jQuery

//click()
//add to a single element or selection of elements, depending on what you select
$("h1").click(function() {
	alert("someone clicked");
})
$("img").click(function() {
	$(this).attr("title", "RGB Image");
	var text = $(this).attr("title"); //note that here, you need to use a jQuery method to get the property
	console.log("You clicked " + text);
})
//note how jQuery version of THIS is different
//can pass anonymous function or function

//keypress()
//add a keypress listener to elements
//fires in between keyup and keydown
$("input[type='text']") //does the command only on a certain kind of input 
$("input").keypress(function(event) {
	if(event.which==13) {
		alert("you hit enter")
	}else {

	}
})
//that event object has a TON of useful attributes that you can check
//use a javascript code page to find which codes are which for keypresses
//ensure you understand these

//on()
//just like addEventListener; the most used jQuery method
//on() supports all types of events: click, dblclick, dragstart,keypress
//there are WAY more events - look them up
//takes two arguments, type of event and callback function
$("h2").on("dblclick", function(){
	$(this).css("color","purple")
	//using this means the one h2 you clicked on
	//if you had multiple, and wrote h2 instead of this
	//they would all change
})

$("input").on("keypress", function() {
	console.log("keypress");
});

$("li").on("mouseenter",function() {
	$(this).css("fontWeight","bold");
});
//but this can also be done without javascript
$("li").on("mouseleave",function() {
	$(this).css("fontWeight","normal");
});

//on("click") vs click -- on click adds listeners for all potential future elements
//whereas click only adds it for what's on the page at the moment

//can also do effects and animations
//.fadeOut("duration", callback fxn)
//fade out goes to full transparency
$("#fade").on("click", function() {
	$(".effect").fadeOut(1000, function() {
		$(this).remove();//waits until fade out is finished, then REMOVES item
	});//give a number of seconds
});
//after fading, the divs are still there
//but their display is set to none
//javascript won't wait for fade to finish to continue running through code
//***if you want the code to run after the fade, put it WITHIN the fadeOut callback

//can also do a fadeIn(); if we set initial display to none
//can do a fadeToggle(); knows if it's faded in or out

//we also have slideDown(); slideUp(); and slideToggle();
//animates the height of an element
