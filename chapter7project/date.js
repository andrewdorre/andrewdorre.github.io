"use strict";

/* var thirtyOne = ["January", "March", "May", "July", "August", "October", "December"];
var thirty = ["April", "June", "September", "November"]; */

var today = new Date();
var newDate = new Date();
var userDate = new Date();
var solution;
var year;
var month;
var day;
var singleDay = 1000 * 60 * 60 * 24;
var yearDiff;
var monthDiff;
var dayDiff;

function date() {
    
    document.getElementById("today").innerHTML = "Today: " + today;
    /* document.getElementById("yesterday").innerHTML = "Yesterday: " + yesterday + "Millis: " + yesterday.valueOf();
    document.getElementById("subtraction").innerHTML = "Today minus Yesterday: " + today - yesterday; */
    year = document.getElementById("yearSubmit").value;
    month = document.getElementById("monthSubmit").value;
    day = document.getElementById("daySubmit").value;
    userDate.setFullYear(year, month - 1, day);
    document.getElementById("userDate").innerHTML = "Date you entered: " + userDate;
    /* solution = today.getTime() - userDate.getTime();

    var numDays = Math.round(solution / singleDay);

    document.getElementById("subtraction").innerHTML = "Current date minus your date: " + numDays; */

    yearDiff = Math.abs(today.getFullYear() - userDate.getFullYear());

    /* document.getElementById("yearDiff").innerHTML = "Difference in number of years: " + yearDiff; */

    monthDiff = Math.abs(today.getMonth() - userDate.getMonth());

    /* document.getElementById("monthDiff").innerHTML = "Difference in number of months: " + monthDiff; */

    dayDiff = Math.abs(today.getDay() - userDate.getDay());

    /* document.getElementById("dayDiff").innerHTML = "Difference in number of days: " + dayDiff; */

    document.getElementById("dateDiff").innerHTML = "There is a difference of " + yearDiff + " years, " + monthDiff + " months, and " + dayDiff + " days.";

}
/* function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
} */