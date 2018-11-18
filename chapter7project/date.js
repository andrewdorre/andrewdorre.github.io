/*
CIS166AA - JavaScript
      Chapter 7
      Chapter case project

      Date, Math, and OOP
      
      Author: Andrew Dorre
      Date:   11/18/2018

	  Filename: date.js
*/
"use strict";

// I tried a few different things before finally settling on what I did. These arrays
// was part of one of my initial plans

/* var thirtyOne = ["January", "March", "May", "July", "August", "October", "December"];
var thirty = ["April", "June", "September", "November"]; */

// Several variables. Maybe more than I need. 
var today = new Date();
//var newDate = new Date();
var userDate = new Date();
//var solution;

// These, I probably could have put in the function. I don't think it really served a purpose
// declaring them ahead of time up here.
var year;
var month;
var day;
// This is part of an initial test. To get the number of milliseconds in difference
// from the user date to todays date. It was problematic though...
// Part of that idea came from this link:
// https://www.htmlgoodies.com/html5/javascript/calculating-the-difference-between-two-dates-in-javascript.html
//var singleDay = 1000 * 60 * 60 * 24;
var yearDiff;
var monthDiff;
var dayDiff;

function date() {
    // Instead of doing some of the other complicated things, I just had the user enter the information,
    // Then I took the year, subtracted it from the current year, took the month, subtracted it from the
    // current month, and took the "date" (as in, day of the month) and subtracted it from the current date
    // Also made all Math methods use absolutes, so there wouldn't be any negatives.
    // I don't know if this is what I was supposed to do, but it appears to work for every date I have tried.
    // I am not sure how to test it and easily see if it's wrong though.


    // Lots of commented out stuff when I was testing different ideas.
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

    dayDiff = Math.abs(today.getDate() - userDate.getDate());

    /* document.getElementById("dayDiff").innerHTML = "Today's day: " + today.getDate() + " your date day: " + userDate.getDate(); */

    document.getElementById("dateDiff").innerHTML = "There is a difference of " + yearDiff + " years, " + monthDiff + " months, and " + dayDiff + " days.";

}

// When I first started, I was trying to figure out how to use the leap year, and differentiate between
// months with 30, 31, and 28 days. My brain was really hurting...
// https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
/* function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
} */