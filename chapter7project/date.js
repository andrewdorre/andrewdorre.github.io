"use strict";

var thirtyOne = ["January", "March", "May", "July", "August", "October", "December"];
var thirty = ["April", "June", "September", "November"];

var today = new Date();
var newDate = new Date();
var userDate = new Date();
var solution;
var year;
var month;
var day;
var singleDay = 1000 * 60 * 60 * 24;

function date() {
    
    document.getElementById("today").innerHTML = "Today: " + today;
    /* document.getElementById("yesterday").innerHTML = "Yesterday: " + yesterday + "Millis: " + yesterday.valueOf();
    document.getElementById("subtraction").innerHTML = "Today minus Yesterday: " + today - yesterday; */
    year = document.getElementById("yearSubmit").value;
    month = document.getElementById("monthSubmit").value;
    day = document.getElementById("daySubmit").value;
    userDate.setFullYear(year, month - 1, day);
    document.getElementById("userDate").innerHTML = "Date you entered: " + userDate;
    solution = today.getTime() - userDate.getTime();
    document.getElementById("subtraction").innerHTML = "Current date minus your date: " + Math.round(solution / singleDay);

}
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}