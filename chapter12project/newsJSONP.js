/* 
    CIS166AA - JavaScript
    Chapter 12
    Chapter case project

    jQuery - Ajax with JSON

    Author: Andrew Dorre
    Date:   11/30/2018

    Filename: newsJSON.js

    Powered by https://newsapi.org

    The "old" code is at the bottom, commented out.
*/
"use strict";

var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=5cb35fea7dfd4098abd2498570bdcfb9';



// Looked up "jQuery ajax methods" and checked this W3Schools link. Very helpful
// https://www.w3schools.com/jquery/jquery_ref_ajax.asp
$.getJSON(url, function (data) {
    $('#status').text("Status: " + data["status"]);
    
// This came in handy on how to rewrite things with jQuery
// https://www.w3schools.com/jquery/jquery_dom_add.asp
    var title = $("<th></th>").text("Title");
    var source = $("<th></th>").text("Source");
    var author = $("<th></th>").text("Author");
    var link = $("<th></th>").text("Link");
    var html = $("<tr></tr>").append(title, source, author, link);
    $("#tablebody").append(html);

// Testing to ensure I can append correctly to the existing table...
// and yes I can.
    /* var newRow = $("<tr></tr>").text(data["articles"][0]["title"]);
    $('#tablebody').append(newRow); */

// Looping in jQuery is apparently done by the "$.each()"" method
// This was a bit confusing, trying to get the correct syntax, mostly because
// you don't really seem to use the index, it simply iterates through on its own
// This was the most helpful link, working with a nested JSON object, it made it
// clear enough for me to test on my own, until I could understand it.
// https://stackoverflow.com/questions/13020258/reading-nested-json-via-ajax-with-jquery-or-javascript-and-outputting-to-tables
    $.each(data.articles, function(key, value) {
        var newTitle = $("<td></td>").text(value.title);
        var newSource = $("<td></td>").text(value.source.name);
        var newAuthor = $("<td></td>").text(value.author);
        
// This link helped me figure out how to create a "a href" element with jQuery
// https://stackoverflow.com/questions/16102024/jquery-create-a-with-href-attribute
// The rest of it I kind of figured out on my own. jQuery is awesome.
        var linkValue = $("<a />", {
            text : "Link",
            href : value.url
        });
// Figuring out the .append method was important for creating elements. Much simpler,
// almost to the point of being so simple I overthought it at first. Also, while it is
// cleaner, it takes some forethought to make sure you build the element and add the text correctly.
// So, it's simpler to read, but maybe not necessarily simpler to implement. At least not at first.
        var newLink = $("<td></td>").append(linkValue);  
        var newRow = $("<tr></tr>").append(newTitle, newSource, newAuthor, newLink);
        $("#tablebody").append(newRow);
    });
});

// Here is the old way, with pure JavaScript, and no jQuery. It's definitely more code,
// but not an ENORMOUS amount more. I think with some more practice though, jQuery is far
// easier to code with. And I bet that at times, depending on the project, jQuery could
// save massive amounts of keystrokes. 

/* function getNews(url, callback) {
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
} */
/* 
getNews(url, function (data) {    
        document.getElementById("status").innerHTML = "Status: " + data["status"];

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
    }); */