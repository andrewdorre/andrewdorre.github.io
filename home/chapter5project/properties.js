/*
CIS166AA - JavaScript
      Chapter 5
      Chapter case project

      Displaying properties
      
      Author: Andrew Dorre
      Date:   11/07/2018

	  Filename: properties.js
*/

var location = document.getElementById("location");

// Submit button performs all the property queries
function submitButton() {
    // first using navigator object methods
    document.getElementById("webbrowser").innerText = "" + navigator.appName;
    document.getElementById("version").innerText = "" + navigator.appVersion;
    // https://www.w3schools.com/html/html5_geolocation.asp
    //document.getElementById("location").innerText = "" + navigator.geolocation(showPosition);
    getLocation();
    document.getElementById("network").innerText = "" + navigator.onLine;
    document.getElementById("operatingsystem").innerText = "" + navigator.platform;
    document.getElementById("useragent").innerText = "" + navigator.userAgent;

    // here using screen object methods
    document.getElementById("availableheight").innerText = "" + screen.availHeight;
    document.getElementById("availablewidth").innerText = "" + screen.availWidth;
    document.getElementById("colordepth").innerText = "" + screen.colorDepth;
    document.getElementById("height").innerText = "" + screen.height;    
    document.getElementById("pixeldepth").innerText = "" + screen.pixelDepth;
    document.getElementById("width").innerText = "" + screen.width;    
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
        location.innerHTML = "Location info is not support in this browser or browser version.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

// Add event listeners to the button
function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", submitButton, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", submitButton);
    }
}

// Create event listeners when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}