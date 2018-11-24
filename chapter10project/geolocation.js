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

/* function getLocation() {           
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } 
    else {
        document.getElementById("location").innerHTML = "Location info is not support in this browser or browser version.";
    }
} */
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var mapOptions = {
        center: new google.maps.LatLng(latlon),
        zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function createMap(showPosition) {
    
    //var latitude = navigator.geolocation.getCurrentPosition(coords.latitude);
        //var longitude = position.coords.longitude;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            /* var lat = navigator.geolocation.getCurrentPosition(position.coords.latitude);
            var long = position.coords.longitude; */
            
        } 
        else {
            document.getElementById("location").innerHTML = "Location info is not support in this browser or browser version.";
        }
        var mapOptions = {
            center: new google.maps.LatLng(latlon),
            zoom: 11
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", createMap, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", createMap);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}