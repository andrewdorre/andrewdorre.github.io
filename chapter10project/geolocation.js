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

function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", initMap, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", initMap);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false); 
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}