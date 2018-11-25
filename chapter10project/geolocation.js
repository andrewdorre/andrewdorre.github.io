/*  
    CIS166AA - JavaScript
    Chapter 10
    Chapter case project

    Geolocation and Maps
     
    Author: Andrew Dorre
    Date:   11/24/2018

    Filename: geolocation.js 
*/
"use strict";
/* Used Google's own tutorials to figure out how to get this to work */
/* https://developers.google.com/maps/documentation/javascript/examples/map-geolocation */
var map, infoWindow;

/* 
    This function is simply set up to add in the script to call the google api and allow the map to be displayed.
    This is poorly described in the book. I also had to get an API key, while free, I had to submit some payment info
    I'm still not complete sure how this works either. I feel like the book maybe should have covered stuff like the 
    &callback= stuff a lot better.
    Currently I'm having errors stating that the script is used in multiple places, but as you can see, I'm only
    using it once here. It seems like the API is calling itself multiple times. The good news is, everything still works
    I just can't figure out how to fix the error.
*/
function loadScript() {
    var script = document.createElement("script");    
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZcFunvhXQm9cAeTsFW0PQoeXH44FwgAg&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// I created this initMap function by using Google's tutorial. Link is above
function initMap() {    
    //Create a map within the div with the "map" id
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });    
    // This is just a helpful tooltip to pinpoint location, as well as pass on any errors
    infoWindow = new google.maps.InfoWindow;

    // This checks to ensure the geolocation service is allowed and working
    // and if so, records the current location of the user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
    // I added these variables to capture the latitude, longitude, and altitude
    // for the assignment
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        
    // If all goes well, this sets the tooltip tag to the current location and displays a message
    // saying "Location found", and sets the location at the center of the map window
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
    // This is just me displaying the exact coordinates, as mentioned in the assignment
        document.getElementById("latlng").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude + "<br>Altitude: " + altitude;   
    // Here is where I display the map. These 3 CSS stylings are necessary, or the map won't show up correctly
        document.getElementById("map").style.display = "block";
        document.getElementById("map").style.height = "100%";
        document.getElementById("map").style.width = "100%";    
    /* 
        I think this has something to do with namespacing. I'm not exactly sure,
        and honestly, it made this assignment extremely difficult. I couldn't get
        stuff to work correctly, and for quite a while I couldn't even use an
        external javascript file, I instead had to put everything in my html file
        Stuff in the book just didn't work the same in the real world. It would tell me
        "position" or "coords" or even "google" was not defined. I feel like the book did
        a really poor job explaining how this works, and mashed it in between the touch events.
        it should have been its own chapter. 
    */
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });                
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }      
    
}
// this function is just in case something goes wrong. If the person blocks the 
// request for location, or their browser simply doesn't support it
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
    "Error: The Geolocation service failed." :
    "Error: Your browser doesn\'t suport geolocation.");
infoWindow.open(map);
}
// My event listeners
function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", loadScript, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", loadScript);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}