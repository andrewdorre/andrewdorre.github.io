/* 
    CIS166AA - JavaScript
    Chapter 11
    Chapter case project

    Ajax with JSON-P

    Author: Andrew Dorre
    Date:   11/27/2018

    Filename: newsJSONP.js

    Powered by https://newsapi.org
*/
// This saved my life: https://code-maven.com/ajax-request-for-json-data
"use strict";
const Http = new XMLHttpRequest();

var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';

function testFunc(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}

testFunc(url, function (data) {
    document.getElementById("test2").innerHTML = data["status"];

    var html = "<tr>" +
        "<th>Title</th>" +
        "<th>Source</th>" +
        "<th>Author</th>" +
        "<th>Link</th>" +
        "</tr>";    
    for (var i = 0; i < data["articles"].length; i++) {
        html += "<tr><td>" + data["articles"][i]["title"] + "</td>";
        html += "<td>" + data["articles"][i]["source"]["name"] + "</td>";
        html += "<td>" + data["articles"][i]["author"] + "</td>";
        html += "<td><a href=\"" + data["articles"][i]["url"] + "\">Link</a></td></tr>";
    }    
    document.getElementById("tablebody").innerHTML = html;
});

function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", testFunc, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", testFunc);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}