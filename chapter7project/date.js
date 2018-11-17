"use strict";

function date() {
    var today = new Date();
    var yesterday = new Date();
    document.getElementById("today").innerHTML = "Today: " + today;
    document.getElementById("yesterday").innerHTML = "Yesterday: " + yesterday + "Millis: " + yesterday.valueOf();
    document.getElementById("subtraction").innerHTML = "Today minus Yesterday: " + today - yesterday;

}