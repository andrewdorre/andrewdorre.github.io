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

var waitForUser;

function geoTest() {
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(initialize, fail, {timeout: 10000});
    } else {
       fail();
    }
 }

function showPosition(position) {
    clearTimeout(waitForUser);
    //var latlon = position.coords.latitude + "," + position.coords.longitude;
    var currPosLat = position.coords.latitude;
    var currPosLng = position.coords.longitude;
    var mapOptions = {
       center: new google.maps.LatLng(currPosLat, currPosLng),
       zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", geoTest, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", geoTest);
    }
}
window.initMap = function() {};

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
    window.initMap = function() {};
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}