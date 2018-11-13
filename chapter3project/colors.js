/*
CIS166AA - JavaScript
      Chapter 3
      Chapter case project

      If statements and arrays
      
      Author: Andrew Dorre
      Date:   11/04/2018

	  Filename: colors.js
*/
var textColor = ["red", "green", "blue", "yellow"];
var backColor = ["yellow", "blue", "green", "red"];
var backCounter = 0;
var textCounter = 0;
var colorType = "default"; 

//this function will cycle through the array of colors for text in the "text" id in the html file
function cycleText(){	
	//It starts out on index 0, which should be red
	document.getElementById("text").style.color = textColor[textCounter];
	//counter increments every time the button is clicked
	textCounter++;
	//this little if statement resets the counter once it reaches the end of the array index,
	//so it can all start over!	
	if (textCounter >= 4){
		textCounter = 0;
	}
	//This was just some test code to help me understand what number the counter was on
	//or at first, just to help me figure out why the colors weren't changing!
	//document.getElementById("tester").innerHTML = "" + textCounter;
}
//This is pretty much the same function as the one above.
//I made a separate array with the colors reversed, because my original plan was to make
//a function that would cause the colors to continuously loop until you clicked a stop button
//but apparently that's a little above my skill level at this point.
function cycleBackground(){	
	document.getElementById("colorback").style.backgroundColor = backColor[backCounter];
	backCounter++
	if (backCounter >= 4){
		backCounter = 0;
	}
}
//Simple function to reset the colors
function resetButton(){
	document.getElementById("text").style.color = "#dddddd";
	document.getElementById("colorback").style.backgroundColor = "#dddddd";
}

//Here's a longer if statement that works with some radial buttons. I had a hard time just figuring out
//how to know which radio button was checked. The link below helped me figure out the syntax
//https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript
function colorChoice(){	
	//I created a second function to handle the color changing, so while I have it in here,
	//I commented it out, just to make sure I could have a function call another function.
	if (document.getElementById("default").checked){		
		//document.getElementById("pagebackground").style.backgroundColor = "#dddddd";	
		colorType = "#ffffff";
	}
	else if (document.getElementById("purple").checked){		
		//document.getElementById("pagebackground").style.backgroundColor = "" + colorType;
		colorType = "purple";
	}
	else if (document.getElementById("yellow").checked){		
		//document.getElementById("pagebackground").style.backgroundColor = "" + colorType;
		colorType = "yellow";
	}
	else if (document.getElementById("green").checked){		
		//document.getElementById("pagebackground").style.backgroundColor = "" + colorType;
		colorType = "green";
	}
	else if (document.getElementById("blue").checked){		
		//document.getElementById("pagebackground").style.backgroundColor = "" + colorType;
		colorType = "blue";
	}
	colorChange();
}
//This and the submit button which I decided to not use, gave me so much trouble. The problem with this
//turned out to be that I was typing "backgroundcolor", instead of "backgroundColor". Woops.
//that's why a little pre-validation can be so nice. I prefer working in an actual IDE as opposed to
//a simple code editor.
function colorChange(){	
	document.getElementById("pagebackground").style.backgroundColor = colorType;
	//document.getElementById("tester").innerHTML = "" + colorType;
}