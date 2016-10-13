/**
 * Tutorial 5 javascript file with all functions used for this tutorial assignment.
 */

/**
 * Searches for the "output" id element and replaces it with a paragraphe containing
 * "Hello World! from javascript" text.
 */
function helloWorld(){
	document.getElementById("output").innerHTML = "Hello World! from javascript";
		
}

/**
 * Prints out a human readable date
 */
function displayDate(){
	var d = new Date();
	document.getElementById("date").innerHTML = String(d.getDate() + "/"  + (d.getMonth() + 1) + "/" + d.getFullYear());
/*	document.getElementById("date").innerHTML = "hey"; */
	
}

function toggleColor(){
	var e = document.getElementById("color_toggle");
	var currentColor = e.style.color;
	
	if(currentColor == "red"){
		e.style.color = "black";
	}else{
		e.style.color = "red";
	}
}