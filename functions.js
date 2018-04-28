//welcome to functions
//just reusable bits of code

function doSomething (num) {
	return num * num * num ;
}
//prints the CODE for the function
doSomething

//executes the function and prints the result
doSomething(10);

//arguments are things you put in the brackets

//return keyword - returns the output of the machine
//means i can capture the value
//only the first return statement will run
//if you don't tell a function what to return, it will return undefined

var x = doSomething(5)
console.log(x)
//x will be 125 because it stores the result of the function
//same return value to a new variable

//return states FINISHES a function

//function declaration vs function expression
//declaration is when you just say function () {}
//expression is when you make var myFunction = function (){}

function isEven (num) {
	if(num%2==0) {
		return true
	}
	return false
}

//refactoring
function isEven (num) {
	return num%2===0 
	//works because this is a boolean statement
}

console.log(isEven(4));
console.log(isEven(21));

function factorial (number) {
var count = 1	
	if (number==0) {
		return 1
	} else {
	while (number>0) {
		count = count*number
		number = number - 1
	}
	return count
}
}

//refactoring / via his solution
function factorial (number) {
var count = 1	
for (var i=2; i <= number; i++) {
	count *= i;
}
}

console.log(factorial(5));
console.log(factorial(10));

function kebabToSnake(input) {
	if (input.search("-") == -1) {
		return input
	} else {
		var newInput = input.replace(/-/g, "_");
		return newInput;
	}
}

console.log(kebabToSnake("fire-truck"))
console.log(kebabToSnake("meh"))
console.log(kebabToSnake("what-is-this"))

//introduction to javascript SCOPE
//properties and variables visible inside functions

function doMath () {
	var x = 40;
	console.log(x);
//in this scope, x is = 40
}

//type x out here in this global scope, and it's undefined
//every function it has its own scope
//but we can still access global variables
//things you define inside the function aren't available outside

//if i declare a variable in global scope, but in the function, i CHANGE that variable
//it only changes in local scope of that function
//scopes are not shared BETWEEN function

//welcome to higher order functions - they take or return another function

function sing () {
	console.log("twinkle twinkle")
	console.log("how I wonder")
}

setInterval (sing, 1000); //don't need brackets around sing
clearInterval (2);

setInterval(function() {
	console.log("I am an anonymous function")
}, 2000);
//just a way to pass code into setInterval - we use them when we're passing functions into other functions

