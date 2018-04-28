var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1score");
var p2display = document.querySelector("#p2score");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var inputNum = document.querySelector("input");
var para = document.querySelector("p");

p1button.addEventListener("click",function() {
	if(!gameOver) {
		p1score++;
	if(p1score===winningScore) {
		p1display.textContent = p1score;
		p1display.classList.add("winner");
		gameOver=true;
	} else {
		p1display.textContent = p1score;
	} 
	}
})

p2button.addEventListener("click",function() {
	if(!gameOver) {
		p2score++;
	if (p2score===winningScore) {
		p2display.textContent = p2score;
		p2display.classList.add("winner");
		gameOver = true;
	} else {
	p2display.textContent = p2score;
	}
	}
})

function reset() {
	p1score=0;
	p2score=0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", reset)

inputNum.addEventListener("change", function(){
	//can use THIS keyword here
	winningScore = Number(inputNum.value); //this is how you get the INPUT from value
	//remember to convert the value to number
	//console.log(winningScore);
	//console.log(typeof(winningScore));
	para.textContent = "Playing to: " + winningScore;  //could do this with a span as well
	reset();
})