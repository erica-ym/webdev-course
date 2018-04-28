//one data structure
//define arrays, methods built in with arrays
//and build to-do list application

var roommates = ["Tanya", "Kayla", "Colin", "Mikaela"]
//indexed starting at 0
//can also use indices to UPDATE arrays
roommates[0] = "Evan"
//can use indices to add new things
roommates[4] = "the DA couch"

var wow = new Array(); //uncommon but does the same

//arrays can hold any type of data
//arrays have a length property

//access all of the array methods here:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//ARRAY METHODS
//push and pop
//push adds to the end of an array
roommates.push("kombucha")
	//returns the length of the array (last position + 1)

//pop removes the last item in an array
roommates.pop()
	//takes no arguments
	//returns the item that it just removed

//shift and unshift
//unshift adds to the front of an array
roommates.unshift("toilet paper")
	//returns the length of the array

//shift takes away from the front of an array
//doesn't need an argument
roommates.shift()
	//shift also returns

roommates.indexOf("Kayla")
	//returns the first item if it's found
	//returns -1 if the item is not found

//use slice to copy parts of the array
//first argument is the first cut point, second argument is end point
//not inclusive of end-point
//doesn't modify original array
//if no arguments, duplicates entire array

//YOU CAN NEST ARRAYS IN ARRAYS
//2 dimensional arrays	

//array iteration
//can use a for loop to work through an array
var colours = ["red", "blue", "green"];
for (var i = 0; i< colours.length;i++) {
	console.log(colours[i])
}

//forEach is very cool and you should understand it
//NEED TO PASS A FUNCTION TO FOR EACH
colours.forEach(function(i, j, k) {
	console.log(i, j, k)
})
//i is the element itself, j is the index of the element, k is the array itself
//k is the same for every iteration in the loop

//whatever that i variable is, it holds that value every time, passes in each value
//if you pass it another function
//colours.forEach(functionName);
//do not include brackets with that function bc then it will do it right away

//use for or forEach, while is always more code
//for loop, we're dealing with a number. forEach is temporary placeholder

//PROBLEM SET
var testOne = [1,2,3,4];
function printReverse (j) {
	for (var i = j.length-1; i>=0;i--) {
		console.log(j[i]);
	}
}

printReverse(testOne);

var testTwo = [1,1,1,1]
function isUniform (i,j,k) {
	if (i===k[j+1] && j+1!==k.length){
		console.log(true);
	} else {
		console.log(false);
	}
}

testTwo.forEach(isUniform)
testOne.forEach(isUniform)

//didn't do isUniform right, here's his version

function isUniformMOD (i) {
	var first = i[0]
	for (var k = 1; k<i.length; k++) {
		if(i[k] != first) {
			return false
		}
	}
	return true
}

isUniformMOD(testOne);
isUniformMOD(testTwo);


var count = 0
function sumArray (i,j,k){
	count += i;
	if (j+1==k.length){
		console.log(count);
		count=0
	}
}
//can also do this with a for loop

testTwo.forEach(sumArray);
testOne.forEach(sumArray);

testThree = [7, -2, 1000, 70]
function maximum (arr) {
	var max = arr[0]
	for(var i = 1; i<arr.length; i++) {
		if(arr[i]>max) {
			max = arr[i];
		}
	}	
	console.log(max);
	//really should use return here
}

maximum(testOne);
maximum(testThree);




