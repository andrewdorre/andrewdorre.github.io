/* 
    CIS166AA - JavaScript
    Chapter 12
    Chapter case project

    jQuery - Ajax with JSON

    Author: Andrew Dorre
    Date:   11/30/2018

    Filename: newsJSON.js

    Powered by https://newsapi.org
*/
// This saved my life: https://code-maven.com/ajax-request-for-json-data
"use strict";
const Http = new XMLHttpRequest();

var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';
$.getJSON(url, function (data) {
    $('#test2').text(data["status"]);
    
    // This came in handy on how to rewrite things with jQuery
    // https://www.w3schools.com/jquery/jquery_dom_add.asp
    var title = $("<th></th>").text("Title");
    var source = $("<th></th>").text("Source");
    var author = $("<th></th>").text("Author");
    var link = $("<th></th>").text("Link");
    var html = $("<tr></tr>").append(title, source, author, link);
    $("#tablebody").append(html);
    /* var html = "<tr>" +
        "<th>Title</th>" +
        "<th>Source</th>" +
        "<th>Author</th>" +
        "<th>Link</th>" +
        "</tr>"; */
    
    // .each() method: https://api.jquery.com/each/
    // .append() method: http://api.jquery.com/append/
    // Have to parse first, since it is in string format?
    // https://stackoverflow.com/questions/30269461/uncaught-typeerror-cannot-use-in-operator-to-search-for-length-in
    $.each(JSON.parse(data["articles"]), function (i, item) {        
            var specTitle = $("<td></td>").text($(JSON.parse(this["title"])));
            html = $("<tr></tr>").append(specTitle);
            $("#tablebody").append(html);
        })
        /* var specTitle = $("<td></td>").text(data["articles"][i]["title"]);
        var specSource = $("<td></td>").text(data["articles"][i]["source"]["name"]);
        var specAuthor = $("<td></td>").text(data["articles"][i]["author"]);
        var specLink = $("<td></td>").text("<a href=\"" + data["articles"][i]["url"] + "\">Link</a>"); */
        /* html = $("<tr></tr>").append(specTitle, specSource, specAuthor, specLink);
        $("#tablebody").append(html); */
    });

    /* for (var i = 0; i < data["articles"].length; i++) {
        html.append("<tr><td>" + data["articles"][i]["title"] + "</td></tr>");
        html += "<tr><td>" + data["articles"][i]["title"] + "</td>";
        html += "<td>" + data["articles"][i]["source"]["name"] + "</td>";
        html += "<td>" + data["articles"][i]["author"] + "</td>";
        html += "<td><a href=\"" + data["articles"][i]["url"] + "\">Link</a></td></tr>";
    } */
     
    
});

/*function testFunc(url, function(data)) {
    $.getJSON(url)
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
    
}*/

/*testFunc(url, function (data) {
    $('#test2').text(data["status"]);
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
});*/

/* function createEventListeners() {
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
} */