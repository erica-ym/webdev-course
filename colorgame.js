//picks 6 random colours and gets it to each div - will do this later
var numSquares = 6;
//need to keep track of what MODE you're on
//so that it doesn't create random colour lists
var colours = [];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var bodyC = document.querySelector("body");
var h1 = document.querySelector("h1");
 
var titleDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init() {
	//MODE BUTTON EVENT LISTENERS
	for(var i=0;i<modeButtons.length;i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent=="Easy") {
			numSquares = 3; 
		} else {
			numSquares = 6;
		}
		//this.textContent =="Easy" ? numSquares = 3: numSquares=6;
		//that line is a one line if statement
		reset();
	})

	//SET UP SQUARES
	for (var i = 0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColour = this.style.backgroundColor
		if (clickedColour == pickedColor) {
			messageDisplay.textContent="Correct!"
			changeColours(pickedColor);
			resetButton.textContent="Play Again?"
		} else {
			this.style.backgroundColor = "rgb(80,80,80)";
			messageDisplay.textContent="Try Again!"
		}
	})
}
}	

reset();
}

resetButton.addEventListener("click", reset);

function changeColours (color) {
	for(var i =0; i<squares.length;i++){
		squares[i].style.backgroundColor = color
	}
	h1.style.backgroundColor = color
}

function reset() {
	//generate new colours
	colours = generateRandomColors(numSquares)
	//pick a new random color from array
	pickedColor = pickColor()
	//change the colours of the display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	//change the squares
	for (var i = 0; i<squares.length; i++) {
		if(colours[i]) { //see if colours exists for this i
			//if colours exists (aka there is an entry)
			squares[i].style.display = "block";  // make sure they are visible
			squares[i].style.backgroundColor = colours[i];
		} else {
			//oh wait there are no more entries in colours, do this
			squares[i].style.display = "none"; 
		} 
	}
	h1.style.backgroundColor = bodyC.style.backgroundColor;
}

function pickColor () {
	var random = Math.floor(colours.length*Math.random()) //picks a random number between 0 and 1 not including 1
	//math.floor removes everything after the decimal
	return colours[random]
}
function generateRandomColors (num) {
	var arr = []
	for (var i = 0; i<num; i++) {
		arr.push(randomColor ()) // to build the array of colours
	}
	//add num random colors to array
	return arr
}

function randomColor () {
	var r =  Math.floor(256*Math.random()) //bc of the way floor works, x 256
	var g =  Math.floor(256*Math.random())
	var b =  Math.floor(256*Math.random())
	var result = "rgb(" + r +", " + g + ", " + b + ")";
	return result;
};




