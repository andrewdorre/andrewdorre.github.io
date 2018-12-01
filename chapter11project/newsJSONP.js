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
"use strict";

// This URL was taken from newsapi.org's own example. I also tested this using
// console.log and Code Beautify to ensure I knew what the JSON tables looked like
// https://codebeautify.org/jsonviewer
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';

// This is where I had a hard time. I know it was done similarly in the book,
// but I think the book confused me with the talk of proxies, and I thought that
// this stuff was unnecessary. Que several hours, and I finally researched and stumbled
// across Code Maven. This helped me get the connection set up, but more importantly.
// helped me figure out how to access the JSON object arrays and enter them into
// the html of the site.
// https://code-maven.com/ajax-request-for-json-data
function getNews(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
// Here it checks to ensure it is able to successfully connect to
// the web service. If it can, it parses the JSON data to put it in
// a format that is easily accessible below
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

getNews(url, function (data) {
// I started with this status just to see if I could see anything outside of
// the console log. When I finally saw an "ok", it was a very happy moment!
// I thought it was ok to leave it in, in case there is some sort of status
// issue with the web service.
    document.getElementById("status").innerHTML = "Status: " + data["status"];

// Here is where we get into the weeds a bit. I used a table similar to one I
// created for my PHP class here. Basically the table headers are built inside
// of a variable, and then a for loop creates a row with the data that should be
// under each header after that.
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
// This inserts the html variable into the table body element in the HTML file.
// At this point, the html variable should contain a fully built table
    document.getElementById("tablebody").innerHTML = html;
});