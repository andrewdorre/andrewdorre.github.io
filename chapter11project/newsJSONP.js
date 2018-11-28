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
/* const url = 'https://api.iextrading.com/1.0/stock/fb/quote'; */

var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';
var IEX = 'https://api.iextrading.com/1.0?symbols=SNAP,fb';
/* var i, x, test = "";
var myObj;

var req = new Request(url); */

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
    /* fetch(url)
        .then(data => { return data.json() })
        .then(res => { console.log(res) }) */
    
/*     $.ajax({
        type: 'GET',
        url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=5cb35fea7dfd4098abd2498570bdcfb9',        
        success: function (feed) {
            $("<h1>").text(feed.articles).appendTo("body");
        },
        dataType: 'jsonp'

    }); */
    /* fetch(req)
        .then(function (response) {
            console.log(response.json()); */
            
            //myObj = response.json();
        /* }) */
    /* var myJSON = JSON.parse(object);
    document.getElementById("test2").innerHTML = myJSON.articles["0"].title; */
    /* document.getElementById("test2").innerHTML = response.json(); */
            //console.log(response.json());
            //console.log(articles)                           
        
        /* .then(function (response) {
            
        var object = response.json();
        var myJSON = JSON.stringify(object);
        document.getElementById("test2").innerHTML = myJSON;
        }) */
    //var myJSON = JSON.stringify(object.articles[0]);
    //console.log(object);
    //var myJSON = JSON.parse(object);
    //var stringed = JSON.stringify(myJSON);
    //var json = JSON.parse(object);
    /* JSON.parse(myObj);
    alert(myObj["object"]["articles"]["0"]["author"]); */
    
}

testFunc(url, function (data) {
    document.getElementById("test2").innerHTML = data["status"];

    var html = "<h2>" + data["status"] + "</h2>";
    html += "<ul>";
    for (var i = 0; i < data["articles"].length; i++) {
        html += '<li>' + data["articles"][i]["title"] + "</li>";
    }
    html += "</ul>";
    document.getElementById("newstest").innerHTML = html;

});
/* function openPromise() {
    var json = JSON.parse(object);

    alert(json["articles"]);
} */

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
/* for (i in req.articles) {
    x += "<h2>" + req.articles[i].title + "</h2>";            
} */
//document.getElementById("newstest").innerHTML = x
//document.getElementById("test2").innerHTML = req[0].response.body;


/* var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';

var req = new Request(url);
fetch(req)
    .then(function (response) {
        console.log(response.json());
    })
document.getElementById("newstest").innerHTML = req.title;

if (window.addEventListener) {
    window.addEventListener("load", button, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", button);
} */