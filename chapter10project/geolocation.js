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
function loadScript() {
    var script = document.createElement("script");    
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZcFunvhXQm9cAeTsFW0PQoeXH44FwgAg&callback=initMap";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}
function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
    });
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var altitude = position.coords.altitude;
        
        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
        document.getElementById("latlng").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude + "<br>Altitude: " + altitude;   
        document.getElementById("map").style.display = "block";
    document.getElementById("map").style.height = "100%";
    document.getElementById("map").style.width = "100%";    
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });                
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }      
    
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
    "Error: The Geolocation service failed." :
    "Error: Your browser doesn\'t suport geolocation.");
infoWindow.open(map);
}
function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", loadScript, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", loadScript);
    }
}

// Create event listeners when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}