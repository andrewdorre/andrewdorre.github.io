var textColor = ["red", "green", "blue", "yellow"];
var backColor = ["yellow", "blue", "green", "red"];
var backCounter = 0;
var textCounter = 0;

//https://stackoverflow.com/questions/29173956/start-and-stop-loop-in-javascript-with-start-and-stop-button
//https://www.w3schools.com/js/js_timing.asp
function autoCycle(){
	var loopCycle = false;
	while (!loopCycle){
		//Loop cycling of text colors
		document.getElementById("text").style.color = textColor[textCounter];
	textCounter++;
	if (textCounter >= 4){m
		textCounter = 0;
	}; 
	document.getElementById("tester").innerHTML = "" + textCounter;
	
		//Loop cycling of div background colors
		document.getElementById("colorback").style.backgroundColor = backColor[backCounter];
	backCounter++
	if (backCounter >= 4){
		backCounter = 0;
	};
	
	}
}

function cycleText(){
	
	document.getElementById("text").style.color = textColor[textCounter];
	textCounter++;
	if (textCounter >= 4){
		textCounter = 0;
	}; 
	document.getElementById("tester").innerHTML = "" + textCounter;
}
function cycleBackground(){
	
	document.getElementById("colorback").style.backgroundColor = backColor[backCounter];
	backCounter++
	if (backCounter >= 4){
		backCounter = 0;
	}
}