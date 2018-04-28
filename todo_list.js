console.log("todo list ready")
var todos = [];
window.setTimeout (function()  {
	//putting all of your code in the function will make the HTML show up 
	//HTML will load before it starts the JS script
/* ORIGINAL CODE
	var input = prompt("what do you want to do?")
	while(input!=="quit") {
		if (input === "list") {
		todos.forEach(function(t, i) {
			console.log("~~~~~~~~~~~~");
			console.log(i+1 + ": " + t);
		});
		;
		console.log("item added");
	} else if (input === "new") {
		var newTodo = prompt("what's that task you want to accomplish?")
		todos.push(newTodo)
	} else if (input === "delete") {
		var index = prompt("which todo do you want to delete?");
		//the array.splice fxn cuts out (at this point, this many items)
		todos.splice(index,1);
		console.log("item deleted");
	}
	input = prompt("what do you want to do?")

*/	
//refactored code
function listTodo() {
todos.forEach(function(t, i) {
	console.log("~~~~~~~~~~~~");
	console.log(i+1 + ": " + t);
	});
	;
	console.log("item added");
};

function addTodo() {
	var newTodo = prompt("what's that task you want to accomplish?")
	todos.push(newTodo)
}

function deleteTodo() {
	var index = prompt("which todo do you want to delete?");
		//the array.splice fxn cuts out (at this point, this many items)
	todos.splice(index,1);
	console.log("item deleted");
}

var input = prompt("what do you want to do?")
	while(input!=="quit") {
		if (input === "list") {
		listTodo();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();	
	}
	input = prompt("what do you want to do?")
	}
	console.log("you quit the app!")

}, 500);