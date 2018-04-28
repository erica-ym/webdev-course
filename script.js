//alert("hello from the JS file!");

/*
var userFirstName = prompt("what is your first name?");
var userLastName = prompt("what is your last name?");
var userAge = prompt("tell me your age");

alert("nice to meet you, " + userFirstName + " " + userLastName);
alert("wow you are " + userAge + " years old!");
//pay attention to the spacing here
console.log("again, nice to meet you, " + userFirstName);
//console.log things so that you can see in the console where things are going wrong
*/

/*
var userAge = prompt("tell me your age");
//alert("wow, you've been alive " + userAge*365.25 + " days.");

if(userAge%Math.sqrt(userAge)==0) {
	console.log("your age is a perfect square!");
}

if(userAge<18 && userAge > 0) {
	console.log('go away');
} else if (userAge <0) {
	console.log('error, try again');
} else if (userAge == 21) {
	console.log('happy 21st!');
} else if (userAge<21){
	console.log('fam u can\'t drink but hello');
} else {
	console.log('get lit fam');
}

quit();

*/

/*
//guessing game time!
var secretNumber = 4
var guess = prompt("what\'s my number");
console.log(typeof guess)
guess = Number(guess)

if(guess === secretNumber) {
	console.log("you got it right");
} else if (guess < secretNumber) {
	console.log("too low");
} else if (guess > secretNumber) {
	console.log("too high");
}
*/

//welcome to loops 
//DRY code - DON'T REPEAT YOURSELF
var count = 1 

while (count <= 5) {
	console.log(count);
	count+=2
}

//print every letter in a string
var stringPrint = "Erica Yarmol-Matusiak"
var i = 0

while (i < stringPrint.length) {
	console.log(stringPrint[i] + stringPrint[i+1]);
	i++
}

//don't write INFINITE LOOPS
/*
//print all numbers between -10 and 19
var j = -10
while (j<= 19) {
	console.log(j);
	j++
}

//print all even # between 10 and 40
var j = 10
while (j<=40){
	console.log(j);
	j+=2
}

//print all # between 5 and 50 divisible by 5 and 3
var j = 5
while (j<=50){
	if(j%5==0 && j%3==0) {
		console.log(j);
		j++
} else {
	j++
	continue;
}
}
*/

/*
var response = prompt("are we there yet?")

while(response.indexOf("yes") == -1) {
	alert("try again fam");
	response = prompt("are we there yet?");
}

alert("yay we made it")
*/
//for (init;condition;step) 
//can make a variable that only exists within this loop in init

//print all odd numbers between 300 and 333
console.log("new exercise")
for(var i=301;i<=333;i+=2) {
	console.log(i);
}

for(var i=5; i<=50;i++ ) {
	if(i%5==0 && i%3==0) {
		console.log(i);
	}
}
